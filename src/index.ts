const d3Scale = require('d3-scale') // import not available
import _ from 'lodash';
import {aqiSpecs} from './aqiSpecs';

export enum Aqi {
    MISEBIG = 'misebig',
    AIRY = 'misebig',
    US = 'us',
    KR = 'kr',
}
export enum Pollutant {
    PM25 = 'pm25',
    PM10 = 'pm10',
    NO2 = 'no2',
    O3 = 'o3',
    CO = 'co',
    SO2 = 'so2',
}
export type ConcValues = {
    pm25Value: number;
    pm10Value: number;
    no2Value: number;
    o3Value: number;
    coValue: number;
    so2Value: number;
}

const pNames = {
    PM25 : 'pm25',
    PM10 : 'pm10',
    O3 : 'o3',      // ppb
    NO2 : 'no2',    // ppb
    CO : 'co',      // ppb
    SO2 : 'so2'     // ppb
};

export const getIaqiFromConcs = (
    aqiName: Aqi, 
    {pm25Value, pm10Value, no2Value, o3Value, coValue, so2Value}: ConcValues
): number => {
    if (!Object.values(Aqi).includes(aqiName)) return -1;

    let aqis: number[] = [];
    aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, pm25Value))
    aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, pm10Value))
    aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, no2Value))
    aqis.push(getAqiFromConc(aqiName, Pollutant.O3, o3Value))
    aqis.push(getAqiFromConc(aqiName, Pollutant.CO, coValue))
    aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, so2Value))

    return _.max(aqis)
}

export const getAqiFromConc = (
    aqiName: Aqi, 
    pollutant: Pollutant, 
    conc: number
): number => {
    const level = getLevelFromConc(aqiName, pollutant, conc)
    
    if (level === -1 || conc < 0) {
        return -1;
    }
    
    let aqi;
    if (level == aqiSpecs[aqiName].level) {
        aqi = concToAqiLast(aqiName, pollutant, conc)
        return aqi;
    } 

    // level is 0~5
    const bpLow = getAqiLow(aqiName, pollutant, level)
    const bpHigh = getAqiHigh(aqiName, pollutant, level)
    const cLow = getCLow(aqiName, pollutant, level)
    const cHigh = getCHigh(aqiName, pollutant, level)
    
    aqi = bpLow + (conc - cLow)*(bpHigh - bpLow)/(cHigh - cLow)
    // console.log(`concToAqi: aqi:${aqi} = bpLow:${bpLow} + (conc:${conc} - cLow:${cLow})*bpHigh:${bpHigh}-bpLow:${bpLow})/(cHigh:${cHigh}-cLow:${cLow})`)

    return Math.round(aqi)
}

export const getPosInLevel = (
    aqiName: Aqi, 
    aqi: number
): number => {
    if (aqiName === 'kr' && aqi > 150) {
        const hazardousPos = d3Scale.scaleLog()
                    .domain([151, 500, 2000])
                    .range([0.02, 0.5, 0.6])
        
        return _.round(hazardousPos(aqi),2)
    }
    
    if (aqi > 300) { // 'misebig', 'us'
        const hazardousPos = d3Scale.scaleLog()
                    .domain([301, 500, 2000])
                    .range([0.02, 0.4, 0.45])
        return _.round(hazardousPos(aqi),2)
    }

    const level = getLevelByAqi(aqiName, aqi)
    const highValue = aqiSpecs[aqiName].indexBp[level];
    const lowValue = level > 0 ? aqiSpecs[aqiName].indexBp[level-1] + 1 : 0;
    const pos = (aqi - lowValue)/(highValue - lowValue)

    const generalPos = d3Scale.scaleLinear().domain([lowValue,highValue]).range([0.05, 0.95])
    const newPos = _.round(generalPos(aqi),2)

    return newPos; 
}

export const getLevelByAqi = (
    aqiName: Aqi, 
    aqiValue: number
): number => {
    if (aqiName === 'kr' && aqiValue > 150) return 3;
    if (aqiValue > 400) return 5;

    let level;
    for (level = 0; level < aqiSpecs[aqiName].level; level++) {
        if (aqiValue <= aqiSpecs[aqiName].indexBp[level]) break;
    }
    
    return level;
}

export const getLevelFromConc = (
    aqiName: Aqi, 
    pollutant: Pollutant, 
    conc: number
): number => {
    if (!isValidPollutantName(pollutant)) return -1;
    if (!aqiSpecs[aqiName]) {
        // console.error(`getConcLevel: invalid AQI name:${aqiName}`)
        return -1;
    }
    if (!aqiSpecs[aqiName][pollutant+'Data']) {
        // console.error(`getConcLevel: ${pollutant}Data field not found.`)
        return -1;
    }
    if (isNaN(conc)) return -1;
    
    let level = -1;
    aqiSpecs[aqiName][pollutant+'Data'].concEndPoints.map ( (limit, i) => {
        if (conc <= limit && level == -1) {
            //console.log(`>>> ${conc} < ${limit} `)
            level = i;
            //if (level == -1) level = i;
            //return i; // return previous i as level
        }
    })
    if (level == -1) return aqiSpecs[aqiName].level;
    else return level;
}

export const getAqiBreakpoint = (
    aqiName: Aqi, 
    pollutant: Pollutant, 
    level: number
): number => {
    if (!isValidPollutantName(pollutant) ||
        !aqiSpecs[aqiName] ||
        level >= aqiSpecs[aqiName].level ) 
        return -1;

    return aqiSpecs[aqiName][pollutant+'Data'].concEndPoints[level];
}

// Calculate AQI from concentration where AQI value is higher than 500
// Official AQI value's highest limit is 500 but there are cases where AQI value is much higher the limit.
// AQI above 501 is calculated by using the increase rate from AQI 401 to 500 of each pollutant.
const concToAqiLast = (
    aqiName: Aqi, 
    pollutant: Pollutant, 
    conc: number
): number => {
    if (!aqiSpecs[aqiName]) return -1;

    const {slope, intercept} = aqiSpecs[aqiName][pollutant+'Data'];
    const aqi = slope * conc + intercept;

    if (Number(aqi)) return Math.round(aqi)
    else return -1;
}

function getAqiLow(aqiName, pollutant, level) {
    if (level == -1) return -1;
    if (level == 0) return 0;
    return aqiSpecs[aqiName].indexBp[level-1] + 1;
}

function getAqiHigh(aqiName, pollutant, level) {
    if (level == -1) return -1;
    return aqiSpecs[aqiName].indexBp[level]
}

function getCLow(aqiName, pollutant, level) {
    if (level == -1) return -1;
    if (level == 0) return 0;
    // level > 0
    let lowValue = aqiSpecs[aqiName][pollutant+'Data'].concEndPoints[level-1];
    switch (pollutant) {
        case 'pm25':
            lowValue += 0.1;
            break;
        case 'pm10':
            lowValue += 1;
            break;
        case 'co':
            lowValue += 0.01;
            break;
        default: // NO2, SO2, O3
            lowValue += 0.001;
    }
    return lowValue;
}

function getCHigh(aqiName, pollutant, level) {
    if (level == -1) return -1;        
    return aqiSpecs[aqiName][pollutant+'Data'].concEndPoints[level];
}

function isValidPollutantName(pollutant) {
    return _.includes(pNames, pollutant)
}
