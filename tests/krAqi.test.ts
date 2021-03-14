import { 
    getAqiFromConc, 
    Aqi,
    Pollutant,
} from '../src/index';
import { aqiSpecs } from '../src/aqiSpecs';

const aqiName = Aqi.KR;

describe('PM2.5 농도 -> KR AQI 테스트', () => {
    const pollutant = Pollutant.PM25;
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


    test('농도 100 는 AQI 171 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 100)).toBe(171)
    })
    test('농도 300 는 AQI 336 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 300)).toBe(336)
    })
    test('농도 400 는 AQI 418 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 400)).toBe(418)
    })
    test('농도 499 는 AQI 499 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 499)).toBe(499)
    })
    test('농도 501 는 AQI 501 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 501)).toBe(501)
    })
    test('농도 1260 는 AQI 1126 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1260)).toBe(1126)
    })
})

describe('PM10 농도 -> KR AQI 테스트', () => {
    const pollutant = Pollutant.PM10;
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

    test('농도 55 는 AQI 75 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 55)).toBe(75)
    })
    test('농도 250 는 AQI 228 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 250)).toBe(228)
    })
    test('농도 450 는 AQI 383 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 450)).toBe(383)
    })
    test('농도 599 는 AQI 499 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 599)).toBe(499)
    })
    test('농도 601 는 AQI 501 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 601)).toBe(501)
    })
    test('농도 504 는 AQI 425 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 504)).toBe(425)
    })

    test('농도 999 는 AQI 810 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 999)).toBe(810)
    })
    test('농도 1500 는 AQI 1200 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1500)).toBe(1200)
    })
})

describe('NO2 농도 -> KR AQI 테스트', () => {
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

    
    test(`농도 1.99 는 AQI 498 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.99)).toBe(498)
    })
    test(`농도 2.01 는 AQI 502 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 2.01)).toBe(502)
    })
    test('농도 3 은 AQI 694 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 3)).toBe(694)
    })
    test('농도 4.123 은 AQI 912 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 4.123)).toBe(912)
    })
})


describe('O3 농도 -> KR AQI 테스트', () => {
    const pollutant = Pollutant.O3;
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

    
    test(`농도 0.59 는 AQI 492 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.59)).toBe(492)
    })
    test(`농도 0.61 는 AQI 508 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.61)).toBe(508)
    })
    test('농도 0.999 은 AQI 810 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.999)).toBe(810)
    })
    test('농도 1.5 은 AQI 1200 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.5)).toBe(1200)
    })
})

describe('SO2 농도 -> KR AQI 테스트', () => {
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

    
    test(`농도 0.152 는 AQI 151 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.152)).toBe(151)
    })
    test(`농도 0.99 는 AQI 496 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 0.99)).toBe(496)
    })
    test(`농도 1.01 는 AQI 504 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.01)).toBe(504)
    })
    test('농도 1.5 은 AQI 706 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.5)).toBe(706)
    })
    test('농도 1.999 은 AQI 911 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 1.999)).toBe(911)
    })
})

describe('CO 농도 -> KR AQI 테스트', () => {
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

    
    test(`농도 49.9 는 AQI 499 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 49.9)).toBe(499)
    })
    test(`농도 50.1 는 AQI 501 이다.`, () => {
        expect(getAqiFromConc(aqiName, pollutant, 50.1)).toBe(501)
    })
    test('농도 80 은 AQI 800 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 80)).toBe(800)
    })
    test('농도 90.9 은 AQI 999 이다.', () => {
        expect(getAqiFromConc(aqiName, pollutant, 99.9)).toBe(999)
    })
})

describe('질못된 파라미터 검증하기', () => {
    test(`첫번째 파라미터 aqiName 'mise'를 주면 -1 을 리턴한다.`, () => {
        //@ts-ignore
        expect(getAqiFromConc('mise', 'pm25', 100)).toBe(-1)
    })
    test(`두번째 파라미터 오염원 이름으로 'pm'을 주면 -1 을 리턴한다.`, () => {
        //@ts-ignore
        expect(getAqiFromConc(aqiName, 'pm', 100)).toBe(-1)
    })
    test(`세번째 파라미터가 -1 이면 -1 을 리터한다.`, () => {
        //@ts-ignore
        expect(getAqiFromConc(aqiName, 'pm25', -1)).toBe(-1)
    })
})
