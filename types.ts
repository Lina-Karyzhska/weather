export enum TabsNames {
  FIRST = "for today",
  SECOND = "for 48 hours",
  THIRD = "for a week"
}

export enum PollutionComponents {
  CO = 'co',
  NO = 'no',
  NO2 = 'no2',
  O3 = 'o3',
  SO2 = 'so2',
  PM2_5 = 'pm2_5',
  PM10 = 'pm10',
  NH3 = 'nh3',
}

export type GetTemp = (n: number) => string;

export interface Tabs {
  getTemp: GetTemp,
  openTab?: TabsNames,
  hourlyForecast?: Forecast[], 
  dailyForecast?: Forecast[],
  currentForecast?: Forecast,
}

export interface Forecast {
  feels_like: number,
  humidity: number,
  temp: {
    day: number,
    night: number
  } | number | string,
  wind_speed: number,
  dt?: number,
}

export interface PlotData {
    time: string,
    wind: number,
    day: string,
    uv: number,
    night?: string,
    pv?: number,
  }