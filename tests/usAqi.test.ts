import { getAqiFromConc, Aqi, Pollutant } from '../src/index';
import { aqiSpecs } from '../src/aqiSpecs';

const aqiName = Aqi.US;

describe(`${aqiName}: PM2.5 농도 -> US AQI 테스트`, () => {
    const pollutant = Pollutant.PM25;
    
    test('농도 12 는 AQI 50이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 12)).toBe(50)
    })
    test('농도 35.4 는 AQI 100이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 35.4)).toBe(100)
    })
    test('농도 55.4 는 AQI 150이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 55.4)).toBe(150)
    })
    test('농도 150.4 는 AQI 200이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 150.4)).toBe(200)
    })
    test('농도 250.4 는 AQI 300이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 250.4)).toBe(300)
    })
    test('농도 350.4 는 AQI 400이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 350.4)).toBe(400)
    })
    test('농도 500 는 AQI 500이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 500)).toBe(500)
    })
    test('농도 1000 는 AQI 832이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1000)).toBe(832)
    })
    test('농도 1260 는 AQI 1005이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1260)).toBe(1005)
    })
})

describe(`${aqiName}: PM10 농도 -> US AQI 테스트`, () => {
    const pollutant = Pollutant.PM10;

    test('농도 54 는 AQI 50이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 54)).toBe(50)
    })
    test('농도 154 는 AQI 100이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 154)).toBe(100)
    })
    test('농도 254 는 AQI 150이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 254)).toBe(150)
    })
    test('농도 354 는 AQI 200이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 354)).toBe(200)
    })
    test('농도 424 는 AQI 300이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 424)).toBe(300)
    })
    test('농도 504 는 AQI 400이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 504)).toBe(400)
    })
    test('농도 604 는 AQI 500이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 604)).toBe(500)
    })
    test('농도 999 는 AQI 895 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 999)).toBe(895)
    })
    test('농도 1500 는 AQI 1396이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1500)).toBe(1396)
    })
})

describe(`${aqiName}: NO2 농도 -> US AQI 테스트`, () => {
    const pollutant = Pollutant.NO2;
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    
    test(`농도 0.085 는 AQI 84 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.085)).toBe(84)
    })
    test(`농도 0.234 는 AQI 126 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.234)).toBe(126)
    })
    test(`농도 1.739 는 AQI 423 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.739)).toBe(423)
    })
    test(`농도 2.049 는 AQI 500 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 2.049)).toBe(500)
    })
    test('농도 3 은 AQI 739 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 3)).toBe(739)
    })
    test('농도 4.123 은 AQI 1020 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 4.123)).toBe(1020)
    })
})

describe(`${aqiName}: O3 농도 -> US AQI 테스트`, () => {
    let i=0;
    const {indexBp} = aqiSpecs[aqiName];
    const pollutant = Pollutant.O3;
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];

    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    
    test(`농도 0.083 는 AQI 78 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.083)).toBe(78)
    })
    test(`농도 0.193 는 AQI 186 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.193)).toBe(186)
    })
    test(`농도 0.604 는 AQI 500 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.604)).toBe(500)
    })
    test('농도 0.999 은 AQI 899 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.999)).toBe(899)
    })
    test('농도 1.5 은 AQI 1405 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.5)).toBe(1405)
    })
})

describe(`${aqiName}: SO2 농도 -> US AQI 테스트`, () => {
    const pollutant = Pollutant.SO2;
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    
    test(`농도 1.004 는 AQI 500 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.004)).toBe(500)
    })
    test('농도 1.5 은 AQI 749 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.5)).toBe(749)
    })
    test('농도 1.999 은 AQI 1000 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.999)).toBe(1000)
    })
})

describe(`${aqiName}: CO 농도 -> US AQI 테스트`, () => {
    const pollutant = Pollutant.CO;
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    i++;
    test(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, concEndPoints[i])).toBe(indexBp[i])
    })
    
    test(`농도 50.4 는 AQI 500 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 50.4)).toBe(500)
    })
    test('농도 80 은 AQI 799 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 80)).toBe(799)
    })
    test('농도 90.9 은 AQI 1000 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 99.9)).toBe(1000)
    })
})

describe(`${aqiName}: 질못된 파라미터 검증하기`, () => {
    test(`첫번째 파라미터 aqiName 'mise'를 주면 -1 을 리터한다.`, () => {
        //@ts-ignore
        expect(getAqiFromConc('mise', 'pm25', 100)).toBe(-1)
    })
    test(`두번째 파라미터 오염원 이름으로 'pm'을 주면 -1 을 리터한다.`, () => {
        //@ts-ignore
        expect(getAqiFromConc(aqiName, 'pm', 100)).toBe(-1)
    })
    test(`세번째 파라미터가 -1 이면 -1 을 리터한다.`, () => {
        //@ts-ignore
        expect(getAqiFromConc(aqiName, 'pm25', -1)).toBe(-1)
    })
})