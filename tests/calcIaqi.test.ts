import {
    getAqiFromConc, 
    getIaqiFromConcs,
    Pollutant,
    ConcValues,
    Aqi,
} from '../src/index';

describe(`대표 AQI 계산 A`, () => {
    const aqiValues: ConcValues = {
        pm25Value: 29,
        pm10Value: 38,
        no2Value: 0.51,
        o3Value: 0.042,
        so2Value: 0.032,
        coValue: 0.8,
    }
    //// console.log(aqiValues)
    test(`'misebig' AQI의 IAQI는 185 이다.`, () => {
        //@ts-ignore
        expect(getIaqiFromConcs('misebig', aqiValues)).toBe(185)
    })
    test(`'airy' AQI의 IAQI는 -1 이다. 'airy' is invalid AQI name.`, () => {
        //@ts-ignore
        expect(getIaqiFromConcs('airy', aqiValues)).toBe(-1)
    })
    test(`Aqi.AIRY AQI의 IAQI는 185 이다.`, () => {
        //@ts-ignore
        expect(getIaqiFromConcs(Aqi.AIRY, aqiValues)).toBe(185)
    })
    test(`'us' AQI의 IAQI는 176 이다.`, () => {
        //@ts-ignore
        expect(getIaqiFromConcs('us', aqiValues)).toBe(176)
    })
    test(`'kr' AQI의 IAQI는 211 이다.`, () => {
        //@ts-ignore
        expect(getIaqiFromConcs('kr', aqiValues)).toBe(211)
    })
})

describe(`대표 AQI 계산 B`, () => {
    const aqiValues: ConcValues = {
        pm25Value: 150,
        pm10Value: 38,
        no2Value: 0.51,
        o3Value: 0.092,
        so2Value: 0.032,
        coValue: 0.8,
    }
    //// console.log(aqiValues)
    test(`misebig AQI의 IAQI는 200 이다.`, () => {
        const aqiName = Aqi.MISEBIG;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName,'pm25' as Pollutant, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10' as Pollutant, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2' as Pollutant, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3' as Pollutant, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2' as Pollutant, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co' as Pollutant, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs('misebig', aqiValues)).toBe(200)
    })
    test(`US AQI의 IAQI는 200 이다.`, () => {
        const aqiName = Aqi.US;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs('us', aqiValues)).toBe(200)
    })
    test(`KR AQI의 IAQI는 213 이다.`, () => {
        const aqiName = Aqi.KR;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs('kr', aqiValues)).toBe(213)
    })
})

describe(`대표 AQI 계산 C: PM10 농도가 181`, () => {
    const aqiValues = {
        pm25Value: 45,
        pm10Value: 181,
        no2Value: 0.51,
        o3Value: 0.092,
        so2Value: 0.032,
        coValue: 0.8,
    }
    
    test(`misebig AQI의 IAQI는 185 이다.`, () => {
        const aqiName = Aqi.AIRY;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(185)
    })
    test(`US AQI의 IAQI는 176 이다.`, () => {
        const aqiName = Aqi.US;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(176)
    })
    test(`KR AQI의 IAQI는 211 이다.`, () => {
        const aqiName = Aqi.KR;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(211)
    })
})

describe(`대표 AQI 계산 D: 오존이 매우 나쁨`, () => {
    const aqiValues = {
        pm25Value: 33,
        pm10Value: 38,
        no2Value: 0.04,
        o3Value: 0.151,
        so2Value: 0.032,
        coValue: 0.8,
    }
    test(`misebig AQI의 IAQI는 151 이다.`, () => {
        // console.log(aqiValues)
        const aqiName = Aqi.MISEBIG;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))
        // console.log(aqis)

        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(151)
    })
    test(`US AQI의 IAQI는 134 이다.`, () => {
        const aqiName = Aqi.US;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))
        // console.log(aqis)

        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(134)
    })
    test(`KR AQI의 IAQI는 151 이다.`, () => {
        const aqiName = Aqi.KR;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))
        // console.log(aqis)

        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(151)
    })
})

describe(`대표 AQI 계산 E: 잘못된 값이 있을 때에도 계산한다`, () => {
    const aqiValues = {
        pm25Value: 33,
        pm10Value: -1,
        no2Value: 0.04,
        o3Value: 0.151,
        so2Value: 0.032,
        coValue: null,
    }
    test(`misebig AQI의 IAQI는 151 이다.`, () => {
        // console.log(aqiValues)
        const aqiName = Aqi.AIRY;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(151)
    })
    test(`US AQI의 IAQI는 134 이다.`, () => {
        const aqiName = Aqi.US;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(134)
    })
    test(`KR AQI의 IAQI는 151 이다.`, () => {
        const aqiName = Aqi.KR;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(151)
    })
})

describe(`대표 AQI 계산 F: 낮은 농도일 때`, () => {
    const aqiValues = {
        pm25Value: 16,
        pm10Value: 33,
        no2Value: 0.01,
        o3Value: 0.04,
        so2Value: 0.012,
        coValue: 0.5,
    }
    test(`misebig AQI의 IAQI는 65 이다.`, () => {
        // console.log(aqiValues)
        const aqiName = Aqi.MISEBIG;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))
        // console.log(aqis)

        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(65)
    })
    test(`US AQI의 IAQI는 59 이다.`, () => {
        const aqiName = Aqi.US;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))
        // console.log(aqis)

        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(59)
    })
    test(`KR AQI의 IAQI는 58 이다.`, () => {
        const aqiName = Aqi.KR;
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))
        // console.log(aqis)

        expect(getIaqiFromConcs(aqiName, aqiValues)).toBe(58)
    })
})

describe(`대표 AQI 계산 G: 일부 값이 없거나 공백일 때`, () => {
    const aqiValues = {
        pm25Value: 16,
        pm10Value: 33,
        no2Value: 0.01,
        o3Value: 0.04,
        so2Value: '',
        coValue: undefined,
    }
    test(`misebig AQI의 IAQI는 65 이다.`, () => {
        // console.log(aqiValues)
        const aqiName = Aqi.MISEBIG
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs(Aqi.MISEBIG, aqiValues)).toBe(65)
    })
    test(`US AQI의 IAQI는 59 이다.`, () => {
        const aqiName = Aqi.US
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs(Aqi.US, aqiValues)).toBe(59)
    })
    test(`KR AQI의 IAQI는 58 이다.`, () => {
        const aqiName = Aqi.KR
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs(Aqi.KR, aqiValues)).toBe(58)
    })
})

describe(`대표 AQI 계산 G: 일부 항목이 없는 경우`, () => {
    const aqiValues = {
        pm25Value: 16,
        pm10Value: 33,
        no2Value: 0.01,
    }
    test(`misebig AQI의 IAQI는 65 이다.`, () => {
        // console.log(aqiValues)
        const aqiName = Aqi.MISEBIG
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs(Aqi.MISEBIG, aqiValues)).toBe(65)
    })
    test(`US AQI의 IAQI는 59 이다.`, () => {
        const aqiName = Aqi.US
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs(Aqi.US, aqiValues)).toBe(59)
    })
    test(`KR AQI의 IAQI는 53 이다.`, () => {
        const aqiName = Aqi.KR
        const aqis: number[] = [];
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM25, aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.PM10, aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName, Pollutant.NO2, aqiValues.no2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.O3, aqiValues.o3Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.SO2, aqiValues.so2Value))
        //@ts-ignore for testing
        aqis.push(getAqiFromConc(aqiName, Pollutant.CO, aqiValues.coValue))

        //@ts-ignore for testing
        expect(getIaqiFromConcs(Aqi.KR, aqiValues)).toBe(53)
    })
})