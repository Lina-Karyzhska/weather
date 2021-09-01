import React from 'react';
import { Forecast, GetTemp, TabsNames } from '../../types';
import DailyForecast from './Tabs/DailyForecast';
import FortyEightHoursForecast from './Tabs/FortyEightHoursForecast';
import TodayForecast from './Tabs/TodayForecast';

export const renderTabs = (openTab: TabsNames, getTemp: GetTemp, hourlyForecast: Forecast[], dailyForecast: Forecast[], currentForecast: Forecast) => {
  switch (openTab) {
    case TabsNames.FIRST:
      return (
        <TodayForecast
          getTemp={getTemp}
          hourlyForecast={hourlyForecast}
          currentForecast={currentForecast}
        />
      );
    case TabsNames.SECOND:
      return <FortyEightHoursForecast getTemp={getTemp} hourlyForecast={hourlyForecast} />;
    case TabsNames.THIRD:
      return <DailyForecast getTemp={getTemp} dailyForecast={dailyForecast} />;
  }
};
