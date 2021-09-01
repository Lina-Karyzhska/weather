import React from 'react';
import moment from 'moment';
import { Tabs } from '../../../../types';
import Plot from '../../Plot';

const FortyEightHoursPlot: React.FC<Tabs> = ({ hourlyForecast, getTemp }) => {
  const fortyEightHoursForecast = () => {
    const data = hourlyForecast.map((forecast, index) => {
      if (index % 4 === 0) {
        return {
          uv: +forecast.temp,
          day: getTemp(Math.round(+forecast.temp)),
          time: moment(forecast.dt * 1000).format('H:mm'),
          wind: forecast.wind_speed,
        };
      }
    });

    return data.filter((el) => !!el);
  };

  return <Plot data={fortyEightHoursForecast()} size="full" />;
}

export default FortyEightHoursPlot;