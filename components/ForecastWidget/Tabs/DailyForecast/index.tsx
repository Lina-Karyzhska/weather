import React from 'react';
import moment from 'moment';
import { Tabs } from '../../../../types';
import Plot from '../../Plot';

const DailyForecast: React.FC<Tabs> = ({ dailyForecast, getTemp }) => {
  const getDailyForecast = () => {
    return dailyForecast.map((forecast) => {
      return typeof forecast.temp === 'object'
        ? {
            uv: +forecast.temp.day,
            day: getTemp(Math.round(+forecast.temp.day)),
            pv: +forecast.temp.night,
            night: getTemp(Math.round(+forecast.temp.night)),
            time: moment(forecast.dt * 1000).format('DD.MM'),
            wind: forecast.wind_speed,
          }
        : null;
    });
  };
  return <Plot data={getDailyForecast()} size="full" />;
}

export default DailyForecast;
