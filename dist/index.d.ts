export declare enum Aqi {
    MISEBIG = "misebig",
    AIRY = "misebig",
    US = "us",
    KR = "kr"
}
export declare enum Pollutant {
    PM25 = "pm25",
    PM10 = "pm10",
    NO2 = "no2",
    O3 = "o3",
    CO = "co",
    SO2 = "so2"
}
export declare type ConcValues = {
    pm25Value: number;
    pm10Value: number;
    no2Value: number;
    o3Value: number;
    coValue: number;
    so2Value: number;
};
export declare const getIaqiFromConcs: (aqiName: Aqi, { pm25Value, pm10Value, no2Value, o3Value, coValue, so2Value }: ConcValues) => number;
export declare const getAqiFromConc: (aqiName: Aqi, pollutant: Pollutant, conc: number) => number;
export declare const getPosInLevel: (aqiName: Aqi, aqi: number) => number;
export declare const getLevelByAqi: (aqiName: Aqi, aqiValue: number) => number;
export declare const getLevelFromConc: (aqiName: Aqi, pollutant: Pollutant, conc: number) => number;
export declare const getAqiBreakpoint: (aqiName: Aqi, pollutant: Pollutant, level: number) => number;
