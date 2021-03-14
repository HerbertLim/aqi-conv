import {
    getAqiBreakpoint,
    Pollutant,
    ConcValues,
    Aqi,
} from '../src/index';
import { aqiSpecs } from '../src/aqiSpecs';

describe(`AQI Breakpoint Test `, () => {
    const aqis: Aqi[] = [Aqi.KR, Aqi.US, Aqi.AIRY];
    const pollutants = ['pm25', 'pm10', 'no2', 'o3', 'co', 'so2'] as Pollutant[];
    const pollutant = 'pm10' as Pollutant;
    aqis.forEach((aqi) => {
        const levels: number[] = [];
        for (let i = 0; i < aqiSpecs[aqi].level; i++) levels.push(i)
    
        pollutants.forEach((pollutant) => {
            levels.forEach((level) => {
                const expectedResult = aqiSpecs[aqi][pollutant+'Data'].concEndPoints[level];
                test(`${aqi.toUpperCase()}:${pollutant.toUpperCase()}: level ${level}의 breakpoint는 ${expectedResult} 이다`, () => {
                    expect(getAqiBreakpoint(aqi, pollutant, level)).toBe(expectedResult)
                })
            })
        })
    })
})