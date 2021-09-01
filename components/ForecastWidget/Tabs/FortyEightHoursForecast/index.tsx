import React from 'react';
import { Tabs } from '../../../../types';
import FortyEightHoursPlot from './FortyEightHoursPlot';

const FortyEightHoursForecast: React.FC<Tabs> = ({ hourlyForecast, getTemp }) => {
  return <FortyEightHoursPlot hourlyForecast={hourlyForecast} getTemp={getTemp} />;
}

export default FortyEightHoursForecast;
