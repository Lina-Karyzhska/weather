import React, { useContext, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import styles from './styles/Styles.module.css';
import { TabsNames } from '../../types';
import { CoordinatesContext } from '../../context/CoordinatesContecst';
import { renderTabs } from './RenderTabs';
import TabsNavigation from './TabsNavigation';

interface IForecastWidgetProps {};

const ForecastWidget: React.FC<IForecastWidgetProps> = () => {
  const [todayForecast, setTodayForecast] = useState(null);
  const [openTab, setOpenTab] = useState(TabsNames.FIRST);
  const { coords } = useContext(CoordinatesContext);

  const getForecast = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lng}&exclude=minutely&units=metric&appid=2ada1f90a622c0779975a23993c8c6a8`,
    );
    const cityJson = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=2ada1f90a622c0779975a23993c8c6a8`,
    );
    const city = await cityJson.json();
    const data = await res.json();
    setTodayForecast({
      ...data,
      name: city.name,
    });
  };

  const getTemp = (temp: number) => {
    const sign = temp > 0 ? '+' : temp < 0 ? '-' : '';
    return sign + temp;
  };

  useEffect(() => {
    if (coords) {
      getForecast();
    }
  }, [coords]);

  if (!todayForecast) {
    return <CircularProgress />;
  }

  return (
    <div className={styles.forecast}>
      <h2 className={styles.forecast__city}>{todayForecast.name}</h2>
      {renderTabs(
        openTab,
        getTemp,
        todayForecast.hourly,
        todayForecast.daily,
        todayForecast.current,
      )}
      <TabsNavigation label={openTab} changeTab={setOpenTab} />
    </div>
  );
}

export default ForecastWidget;
