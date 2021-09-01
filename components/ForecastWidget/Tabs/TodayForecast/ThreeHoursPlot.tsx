import React from 'react';
import moment from 'moment';
import { Tabs } from '../../../../types';
import Plot from '../../Plot';

const PlotToday: React.FC<Tabs> = ({ hourlyForecast, getTemp }) => {
  const today3HourForecast = () => {
    const data = hourlyForecast.map((forecast, index) => {
      if (index % 3 === 0 && index / 3 <= 4) {
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

  return <Plot data={today3HourForecast()} size="half" />;
};

export default PlotToday;
