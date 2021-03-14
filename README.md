# aqi-conv
Converters for AQI and concentration of air pollutants. 

There are six major air pollutants, PM2.5, PM10, O3, NO2, SO2, and CO. Most countries measure and publish concentration values of air pollutants hourly or daily. However, it is difficult for people to interpret and understand the meaning of concentration value of air pollutants. AQI (Air Quality Index) helps people to understand air quality better and easier without any knowledge of each air pollutant. Regardless of pollutants, if AQI of a pollutant is above 100, it is bad. 

Each country develop their own AQI standard. So 38 µg/m³ of PM2.5 is considered bad in one country but moderate in another. [You will find more detail about AQI on Wikipedia.](https://en.wikipedia.org/wiki/Air_quality_index)

`aqi-conv` supports three AQIs: US, KR, and Airy(Misebig, 미세빅). 
- US AQI: [Wikipedia](https://en.wikipedia.org/wiki/Air_quality_index#United_States), [AQI basic on airnow.gov](https://www.airnow.gov/aqi/aqi-basics/)
- KR AQI: Official name of Korean AQI is CAI (Comprehensive air-quality index). [Wikipedia](https://en.wikipedia.org/wiki/Air_quality_index#South_Korea), [Official introduction to Korean AQI](https://www.airkorea.or.kr/web/khaiInfo?pMENU_NO=129)
- Airy(Misebig) AQI: It is a 6-levels AQI similar to US AQI but much tighter. Based on [WHO guidelines](https://apps.who.int/iris/bitstream/handle/10665/69477/WHO_SDE_PHE_OEH_06.02_eng.pdf;jsessionid=B1BC70C7D206DA34F36F9E910BB978AE?sequence=1), US AQI, and Korean AQI, each level of Air AQI is set with tightest one among those three guideline/AQIs. Airy AQI is invented for Airy(Misebig, 미세빅) App.

Note: Although official AQI's max value is 500, `aqi-conv` supports over the limit AQI value. For example, PM2.5's 500 µg/m³ corresponds to US AQI 500. If 1000 µg/m³ is given, AQI value 832 is returned. 

## Usage
To install:
```
$ npm i -S https://github.com/HerbertLim/aqi-conv.git
$ yarn add https://github.com/HerbertLim/aqi-conv.git
```
To run test:
```
$ yarn test or $ npm run test
```
Jest is used for test framework.

&nbsp;

```
import { getAqiFromConc, getIaqiFromConcs } from 'aqi-conv';
```
Supports Typescript.

&nbsp;

## APIs
#### `getAqiFromConc = (aqi: Aqi, pollutant: Pollutant, cValue: number): number`

#### Params
- [aqi](#Aqi): AQI standard 
- [pollutant](#Pollutant): pollutant name
- cValue: concentration value
  - For PM2.5 and PM10, concentration value's unit is `µg/m³`.
  - For NO2, O3, SO2, and CO, concentration value's unit is `ppm`, not `ppb` or `µg/m³`.

#### Returns

- AQI value for specified AQI
- -1 if given params are not valid or unable to calculate valid AQI

&nbsp;

#### `getIaqiFromConcs = (aqi: Aqi, cValues: ConcValues): number`
Given concentration values for six pollutatns, returns integrated AQI value, which is the highest AQI value representing  total air quality.
#### Params
- [aqi](#Aqi): type of AQI. 
- cValues: an object with concentration values of 6 pollutants. Refer [ConcValues](#ConcValues) type below. 

#### Returns
- Highest AQI value among six pollutants. Or AQI value of dominent pollutant. IAQI stands for Integrated AQI.
- -1 if given params are not valid or unable to calculate valid AQI

&nbsp;

#### `getLevelFromConc = (aqi: Aqi, pollutant: Pollutant, cValue: number): number`

#### Params
- [aqi](#Aqi): AQI standard 
- [pollutant](#Pollutant): pollutant name
- cValue: concentration value

#### Returns
- Level of given AQI. 
  - In case of Airy AQI and US AQI, which consists of 6 levels, returns integer from 0 to 6. 6 means given concentration value is over the official AQI limit. In case of KR AQI, which consists of 4 levels, returns integer from 0 to 4. 4 means the same. 
- -1 if given params are not valid or unable to calculate valid AQI

&nbsp;

#### `getLevelByAqi = (aqi: Aqi, aqiValue: number): number`

#### Params
- [aqi](#Aqi): AQI standard 
- aqiValue: AQI value

#### Returns
- Level of given AQI. 
  - In case of Misebig AQI and US AQI, which consists of 6 levels, returns integer from 0 to 6. 6 means given concentration value is over the official AQI limit. In case of KR AQI, which consists of 4 levels, returns integer from 0 to 4. 4 means the same. 
- -1 if given params are not valid or unable to calculate valid AQI

&nbsp;

#### `getPosInLevel = (aqi: Aqi, aqiValue: number): number`

Find position of AQI. If 2.1 is returned, it means air quality is slightly `bad`. If 2.9 is returned, it means air quality is in `bad` level but close to next level, `very bad`.

#### Params
- [aqi](#Aqi): AQI standard 
- aqiValue: AQI value

#### Returns
- Returns exact position floating point number within AQI level. 
  - For example, if AQI value is 75, AQI level is 1, and its position is 1.5. If AQI value is 125, AQI level is 2 and its position is 2.5.
- -1 if given params are not valid or unable to calculate valid AQI

&nbsp;

#### `getAqiBreakpoint = (aqi: Aqi, pollutant: Pollutant, level: number): number`
Find breakpoint of pollutant's AQI level

#### Params
- [aqi](#Aqi): AQI standard 
- [pollutant](#Pollutant): pollutant name
- level: starting from 0 to 3 or 5 depending on AQI. Korean AQI has only 4 levels(or grades) whereas Airy and US AQI has 6 levels.

#### Returns
- Upper breakpoint in concentration.
  - For example, if AQI is `misebig`, pollutant is `pm25`, and level is 2, this function will return 55, because level 2 of PM2.5 in Misebig(Airy) AQI ranges from 26 to 55.
- -1 if given params are not valid or unable to calculate valid AQI

&nbsp;

## Types
#### `Aqi`
```
enum Aqi {
    MISEBIG = 'misebig',
    AIRY = 'misebig',
    US = 'us',
    KR = 'kr',
}
```

#### `Pollutant`
```
enum Pollutant {
    PM25 = 'pm25',
    PM10 = 'pm10',
    NO2 = 'no2',
    O3 = 'o3',
    CO = 'co',
    SO2 = 'so2',
}
```

#### `ConcValues`
```
type ConcValues = {
    pm25Value: number;
    pm10Value: number;
    no2Value: number;
    o3Value: number;
    coValue: number;
    so2Value: number;
}
```
