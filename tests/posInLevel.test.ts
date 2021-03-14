import { getPosInLevel, Aqi } from '../src/index';

describe('미세빅 AQI Value -> Position', () => {
    const aqiName = Aqi.AIRY;

    test(`${aqiName}의 AQI Value 0은 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 0)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 25은 position 0.5 이다 `, () => {
        expect(getPosInLevel(aqiName, 25)).toBe(0.5)
    })
    test(`${aqiName}의 AQI Value 50은 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 50)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 51은 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 51)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 75 position 0.49 이다 `, () => {
        expect(getPosInLevel(aqiName, 75)).toBe(0.49)
    })
    test(`${aqiName}의 AQI Value 100 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 100)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 101 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 101)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 150 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 150)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 151 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 151)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 200 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 200)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 201 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 201)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 300 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 300)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 301 position 0.02 이다 `, () => {
        expect(getPosInLevel(aqiName, 301)).toBe(0.02)
    })
    test(`${aqiName}의 AQI Value 400 position 0.23 이다 `, () => {
        expect(getPosInLevel(aqiName, 400)).toBe(0.23)
    })
    test(`${aqiName}의 AQI Value 600 position 0.41 이다 `, () => {
        expect(getPosInLevel(aqiName, 600)).toBe(0.41)
    })
    test(`${aqiName}의 AQI Value 1500 position 0.44 이다 `, () => {
        expect(getPosInLevel(aqiName, 1500)).toBe(0.44)
    })

})

describe('US AQI Value -> Position in level', () => {
    const aqiName = Aqi.US;

    test(`${aqiName}의 AQI Value 0은 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 0)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 25은 position 0.5 이다 `, () => {
        expect(getPosInLevel(aqiName, 25)).toBe(0.5)
    })
    test(`${aqiName}의 AQI Value 50은 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 50)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 51은 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 51)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 75 position 0.49 이다 `, () => {
        expect(getPosInLevel(aqiName, 75)).toBe(0.49)
    })
    test(`${aqiName}의 AQI Value 100 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 100)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 101 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 101)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 150 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 150)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 151 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 151)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 200 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 200)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 201 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 201)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 300 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 300)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 301 position 0.02 이다 `, () => {
        expect(getPosInLevel(aqiName, 301)).toBe(0.02)
    })
    test(`${aqiName}의 AQI Value 400 position 0.23 이다 `, () => {
        expect(getPosInLevel(aqiName, 400)).toBe(0.23)
    })
    test(`${aqiName}의 AQI Value 600 position 0.41 이다 `, () => {
        expect(getPosInLevel(aqiName, 600)).toBe(0.41)
    })
    test(`${aqiName}의 AQI Value 1500 position 0.44 이다 `, () => {
        expect(getPosInLevel(aqiName, 1500)).toBe(0.44)
    })
})

describe('KR AQI Value -> Position in level', () => {
    const aqiName = Aqi.KR;

    test(`${aqiName}의 AQI Value 0은 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 0)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 25은 position 0.5 이다 `, () => {
        expect(getPosInLevel(aqiName, 25)).toBe(0.5)
    })
    test(`${aqiName}의 AQI Value 50은 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 50)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 51은 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 51)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 75 position 0.49 이다 `, () => {
        expect(getPosInLevel(aqiName, 75)).toBe(0.49)
    })
    test(`${aqiName}의 AQI Value 100 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 100)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 101 position 0.05 이다 `, () => {
        expect(getPosInLevel(aqiName, 101)).toBe(0.05)
    })
    test(`${aqiName}의 AQI Value 150 position 0.95 이다 `, () => {
        expect(getPosInLevel(aqiName, 150)).toBe(0.95)
    })
    test(`${aqiName}의 AQI Value 151 position 0.02 이다 `, () => {
        expect(getPosInLevel(aqiName, 151)).toBe(0.02)
    })
    test(`${aqiName}의 AQI Value 200 position 0.13 이다 `, () => {
        expect(getPosInLevel(aqiName, 200)).toBe(0.13)
    })
    test(`${aqiName}의 AQI Value 201 position 0.13 이다 `, () => {
        expect(getPosInLevel(aqiName, 201)).toBe(0.13)
    })
    test(`${aqiName}의 AQI Value 300 position 0.3 이다 `, () => {
        expect(getPosInLevel(aqiName, 300)).toBe(0.3)
    })
    test(`${aqiName}의 AQI Value 400 position 0.41 이다 `, () => {
        expect(getPosInLevel(aqiName, 400)).toBe(0.41)
    })
    test(`${aqiName}의 AQI Value 600 position 0.51 이다 `, () => {
        expect(getPosInLevel(aqiName, 600)).toBe(0.51)
    })
    test(`${aqiName}의 AQI Value 1500 position 0.58 이다 `, () => {
        expect(getPosInLevel(aqiName, 1500)).toBe(0.58)
    })
})