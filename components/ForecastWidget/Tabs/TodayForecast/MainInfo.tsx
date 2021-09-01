import React from 'react';
import moment from 'moment';
import styles from '../../styles/Styles.module.css';
import { Forecast } from '../../../../types';

const MainInfo: React.FC<Forecast> = ({ temp, feels_like, wind_speed, humidity }) => {
  return (
    <div className={styles.forecast__today}>
      <p className={styles.today__date}>{moment().format('MMMM, DD YYYY')}</p>
      <h2 className={styles.today__temp}>{temp}</h2>

      <div className={styles.today__summary}>
        <table className={styles.summary}>
          <tbody>
            <tr>
              <td className={styles.summary__title}>feels like: </td>
              <td>{feels_like}</td>
            </tr>
            <tr>
              <td className={styles.summary__title}>wind: </td>
              <td>{wind_speed} m/s</td>
            </tr>
            <tr>
              <td className={styles.summary__title}>humidity: </td>
              <td>{humidity}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainInfo;
