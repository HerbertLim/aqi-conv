"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAqiBreakpoint = exports.getLevelFromConc = exports.getLevelByAqi = exports.getPosInLevel = exports.getAqiFromConc = exports.getIaqiFromConcs = exports.Pollutant = exports.Aqi = void 0;
var d3Scale = require('d3-scale'); // import not available
var lodash_1 = __importDefault(require("lodash"));
var aqiSpecs_1 = require("./aqiSpecs");
var Aqi;
(function (Aqi) {
    Aqi["MISEBIG"] = "misebig";
    Aqi["AIRY"] = "misebig";
    Aqi["US"] = "us";
    Aqi["KR"] = "kr";
})(Aqi = exports.Aqi || (exports.Aqi = {}));
var Pollutant;
(function (Pollutant) {
    Pollutant["PM25"] = "pm25";
    Pollutant["PM10"] = "pm10";
    Pollutant["NO2"] = "no2";
    Pollutant["O3"] = "o3";
    Pollutant["CO"] = "co";
    Pollutant["SO2"] = "so2";
})(Pollutant = exports.Pollutant || (exports.Pollutant = {}));
var pNames = {
    PM25: 'pm25',
    PM10: 'pm10',
    O3: 'o3',
    NO2: 'no2',
    CO: 'co',
    SO2: 'so2' // ppb
};
var getIaqiFromConcs = function (aqiName, _a) {
    var pm25Value = _a.pm25Value, pm10Value = _a.pm10Value, no2Value = _a.no2Value, o3Value = _a.o3Value, coValue = _a.coValue, so2Value = _a.so2Value;
    if (!Object.values(Aqi).includes(aqiName))
        return -1;
    var aqis = [];
    aqis.push(exports.getAqiFromConc(aqiName, Pollutant.PM25, pm25Value));
    aqis.push(exports.getAqiFromConc(aqiName, Pollutant.PM10, pm10Value));
    aqis.push(exports.getAqiFromConc(aqiName, Pollutant.NO2, no2Value));
    aqis.push(exports.getAqiFromConc(aqiName, Pollutant.O3, o3Value));
    aqis.push(exports.getAqiFromConc(aqiName, Pollutant.CO, coValue));
    aqis.push(exports.getAqiFromConc(aqiName, Pollutant.SO2, so2Value));
    return lodash_1.default.max(aqis);
};
exports.getIaqiFromConcs = getIaqiFromConcs;
var getAqiFromConc = function (aqiName, pollutant, conc) {
    var level = exports.getLevelFromConc(aqiName, pollutant, conc);
    if (level === -1 || conc < 0) {
        return -1;
    }
    var aqi;
    if (level == aqiSpecs_1.aqiSpecs[aqiName].level) {
        aqi = concToAqiLast(aqiName, pollutant, conc);
        return aqi;
    }
    // level is 0~5
    var bpLow = getAqiLow(aqiName, pollutant, level);
    var bpHigh = getAqiHigh(aqiName, pollutant, level);
    var cLow = getCLow(aqiName, pollutant, level);
    var cHigh = getCHigh(aqiName, pollutant, level);
    aqi = bpLow + (conc - cLow) * (bpHigh - bpLow) / (cHigh - cLow);
    // console.log(`concToAqi: aqi:${aqi} = bpLow:${bpLow} + (conc:${conc} - cLow:${cLow})*bpHigh:${bpHigh}-bpLow:${bpLow})/(cHigh:${cHigh}-cLow:${cLow})`)
    return Math.round(aqi);
};
exports.getAqiFromConc = getAqiFromConc;
var getPosInLevel = function (aqiName, aqi) {
    if (aqiName === 'kr' && aqi > 150) {
        var hazardousPos = d3Scale.scaleLog()
            .domain([151, 500, 2000])
            .range([0.02, 0.5, 0.6]);
        return lodash_1.default.round(hazardousPos(aqi), 2);
    }
    if (aqi > 300) { // 'misebig', 'us'
        var hazardousPos = d3Scale.scaleLog()
            .domain([301, 500, 2000])
            .range([0.02, 0.4, 0.45]);
        return lodash_1.default.round(hazardousPos(aqi), 2);
    }
    var level = exports.getLevelByAqi(aqiName, aqi);
    var highValue = aqiSpecs_1.aqiSpecs[aqiName].indexBp[level];
    var lowValue = level > 0 ? aqiSpecs_1.aqiSpecs[aqiName].indexBp[level - 1] + 1 : 0;
    var pos = (aqi - lowValue) / (highValue - lowValue);
    var generalPos = d3Scale.scaleLinear().domain([lowValue, highValue]).range([0.05, 0.95]);
    var newPos = lodash_1.default.round(generalPos(aqi), 2);
    return newPos;
};
exports.getPosInLevel = getPosInLevel;
var getLevelByAqi = function (aqiName, aqiValue) {
    if (aqiName === 'kr' && aqiValue > 150)
        return 3;
    if (aqiValue > 400)
        return 5;
    var level;
    for (level = 0; level < aqiSpecs_1.aqiSpecs[aqiName].level; level++) {
        if (aqiValue <= aqiSpecs_1.aqiSpecs[aqiName].indexBp[level])
            break;
    }
    return level;
};
exports.getLevelByAqi = getLevelByAqi;
var getLevelFromConc = function (aqiName, pollutant, conc) {
    if (!isValidPollutantName(pollutant))
        return -1;
    if (!aqiSpecs_1.aqiSpecs[aqiName]) {
        // console.error(`getConcLevel: invalid AQI name:${aqiName}`)
        return -1;
    }
    if (!aqiSpecs_1.aqiSpecs[aqiName][pollutant + 'Data']) {
        // console.error(`getConcLevel: ${pollutant}Data field not found.`)
        return -1;
    }
    if (isNaN(conc))
        return -1;
    var level = -1;
    aqiSpecs_1.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints.map(function (limit, i) {
        if (conc <= limit && level == -1) {
            //console.log(`>>> ${conc} < ${limit} `)
            level = i;
            //if (level == -1) level = i;
            //return i; // return previous i as level
        }
    });
    if (level == -1)
        return aqiSpecs_1.aqiSpecs[aqiName].level;
    else
        return level;
};
exports.getLevelFromConc = getLevelFromConc;
var getAqiBreakpoint = function (aqiName, pollutant, level) {
    if (!isValidPollutantName(pollutant) ||
        !aqiSpecs_1.aqiSpecs[aqiName] ||
        level >= aqiSpecs_1.aqiSpecs[aqiName].level)
        return -1;
    return aqiSpecs_1.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints[level];
};
exports.getAqiBreakpoint = getAqiBreakpoint;
// Calculate AQI from concentration where AQI value is higher than 500
// Official AQI value's highest limit is 500 but there are cases where AQI value is much higher the limit.
// AQI above 501 is calculated by using the increase rate from AQI 401 to 500 of each pollutant.
var concToAqiLast = function (aqiName, pollutant, conc) {
    if (!aqiSpecs_1.aqiSpecs[aqiName])
        return -1;
    var _a = aqiSpecs_1.aqiSpecs[aqiName][pollutant + 'Data'], slope = _a.slope, intercept = _a.intercept;
    var aqi = slope * conc + intercept;
    if (Number(aqi))
        return Math.round(aqi);
    else
        return -1;
};
function getAqiLow(aqiName, pollutant, level) {
    if (level == -1)
        return -1;
    if (level == 0)
        return 0;
    return aqiSpecs_1.aqiSpecs[aqiName].indexBp[level - 1] + 1;
}
function getAqiHigh(aqiName, pollutant, level) {
    if (level == -1)
        return -1;
    return aqiSpecs_1.aqiSpecs[aqiName].indexBp[level];
}
function getCLow(aqiName, pollutant, level) {
    if (level == -1)
        return -1;
    if (level == 0)
        return 0;
    // level > 0
    var lowValue = aqiSpecs_1.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints[level - 1];
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
    if (level == -1)
        return -1;
    return aqiSpecs_1.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints[level];
}
function isValidPollutantName(pollutant) {
    return lodash_1.default.includes(pNames, pollutant);
}
