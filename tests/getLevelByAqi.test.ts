import { getLevelByAqi, Aqi } from '../src/index';

describe('미세빅 AQI Value -> 미세빅 Level', () => {
    const aqiName = Aqi.AIRY;

    test(`${aqiName}의 AQI Value 60은 level 1 이다 `, () => {
        expect(getLevelByAqi(aqiName, 60)).toBe(1)
    })
    test(`${aqiName}의 AQI Value 100은 level 1 이다 `, () => {
        expect(getLevelByAqi(aqiName, 100)).toBe(1)
    })
    test(`${aqiName}의 AQI Value 101은 level 2 이다 `, () => {
        expect(getLevelByAqi(aqiName, 101)).toBe(2)
    })
    test(`${aqiName}의 AQI Value 151은 level 3 이다 `, () => {
        expect(getLevelByAqi(aqiName, 151)).toBe(3)
    })
    test(`${aqiName}의 AQI Value 201은 level 4 이다 `, () => {
        expect(getLevelByAqi(aqiName, 201)).toBe(4)
    })
    test(`${aqiName}의 AQI Value 301은 level 5 이다 `, () => {
        expect(getLevelByAqi(aqiName, 301)).toBe(5)
    })
    test(`${aqiName}의 AQI Value 401은 level 5 이다 `, () => {
        expect(getLevelByAqi(aqiName, 401)).toBe(5)
    })
    test(`${aqiName}의 AQI Value 800은 level 5 이다 `, () => {
        expect(getLevelByAqi(aqiName, 800)).toBe(5)
    })
})

describe('US AQI Value -> US Level', () => {
    const aqiName = Aqi.US;

    test(`${aqiName}의 AQI Value 60은 level 1 이다 `, () => {
        expect(getLevelByAqi(aqiName, 60)).toBe(1)
    })
    test(`${aqiName}의 AQI Value 100은 level 1 이다 `, () => {
        expect(getLevelByAqi(aqiName, 100)).toBe(1)
    })
    test(`${aqiName}의 AQI Value 101은 level 2 이다 `, () => {
        expect(getLevelByAqi(aqiName, 101)).toBe(2)
    })
    test(`${aqiName}의 AQI Value 151은 level 3 이다 `, () => {
        expect(getLevelByAqi(aqiName, 151)).toBe(3)
    })
    test(`${aqiName}의 AQI Value 201은 level 4 이다 `, () => {
        expect(getLevelByAqi(aqiName, 201)).toBe(4)
    })
    test(`${aqiName}의 AQI Value 301은 level 5 이다 `, () => {
        expect(getLevelByAqi(aqiName, 301)).toBe(5)
    })
    test(`${aqiName}의 AQI Value 401은 level 5 이다 `, () => {
        expect(getLevelByAqi(aqiName, 401)).toBe(5)
    })
    test(`${aqiName}의 AQI Value 800은 level 5 이다 `, () => {
        expect(getLevelByAqi(aqiName, 800)).toBe(5)
    })
})

describe('KR AQI Value -> KR AQI Level', () => {
    const aqiName = Aqi.KR;

    test(`${aqiName}의 AQI Value 60은 level 1 이다 `, () => {
        expect(getLevelByAqi(aqiName, 60)).toBe(1)
    })
    test(`${aqiName}의 AQI Value 100은 level 1 이다 `, () => {
        expect(getLevelByAqi(aqiName, 100)).toBe(1)
    })
    test(`${aqiName}의 AQI Value 101은 level 2 이다 `, () => {
        expect(getLevelByAqi(aqiName, 101)).toBe(2)
    })
    test(`${aqiName}의 AQI Value 151은 level 3 이다 `, () => {
        expect(getLevelByAqi(aqiName, 151)).toBe(3)
    })
    test(`${aqiName}의 AQI Value 201은 level 3 이다 `, () => {
        expect(getLevelByAqi(aqiName, 201)).toBe(3)
    })
    test(`${aqiName}의 AQI Value 301은 level 3 이다 `, () => {
        expect(getLevelByAqi(aqiName, 301)).toBe(3)
    })
    test(`${aqiName}의 AQI Value 401은 level 3 이다 `, () => {
        expect(getLevelByAqi(aqiName, 401)).toBe(3)
    })
    test(`${aqiName}의 AQI Value 800은 level 3 이다 `, () => {
        expect(getLevelByAqi(aqiName, 800)).toBe(3)
    })
})
