import React from 'react';
import styles from '../../styles/Styles.module.css';
import { Tabs } from '../../../../types';
import MainInfo from './MainInfo';
import PlotToday from './ThreeHoursPlot';

const TodayForecast: React.FC<Tabs> = ({ getTemp, hourlyForecast, currentForecast }) => {
  return (
    <div className={styles.forecast__wrapper}>
      <MainInfo
        temp={getTemp(+currentForecast.temp)}
        feels_like={currentForecast.feels_like}
        wind_speed={currentForecast.wind_speed}
        humidity={currentForecast.humidity}
      />
      <PlotToday hourlyForecast={hourlyForecast} getTemp={getTemp} />
    </div>
  );
}

export default TodayForecast;
