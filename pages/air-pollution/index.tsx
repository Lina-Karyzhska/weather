import { CircularProgress, Grid, makeStyles, Paper } from '@material-ui/core';
import { useState, useContext, useEffect, Fragment } from 'react';
import { CoordinatesContext } from '../../context/CoordinatesContecst';
import { PollutionComponents } from '../../types';

const useStyles = makeStyles({
  root: {
    padding: 20,
    width: '50%',
  },
  div: {
    width: '100%',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    '&:not(:nth-child(n+17))': {
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      borderBottomStyle: 'solid',
    },

    '&:not(:nth-child(2n))': {
      borderRightWidth: 1,
      borderRightColor: '#000',
      borderRightStyle: 'solid',
    },

    display: 'flex',
    justifyContent: 'center',
    fontSize: '1rem',
    padding: 5,
  },
});

export default function AirPollution() {
  const { coords } = useContext(CoordinatesContext);
  const style = useStyles();
  const [pollutions, setPollutions] = useState(null);

  useEffect(async () => {
    if (coords) {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lng}&appid=2ada1f90a622c0779975a23993c8c6a8`,
      );
      const data = await res.json();
      setPollutions(data.list[0].components);
    }
  }, [coords]);

  const getComponentName = (component: PollutionComponents | string) => {
    const nameArr = component.split('');
    const element = nameArr.map((sign) => {
      if (isNaN(+sign) && sign !== '_') {
        return sign.toUpperCase();
      } else {
        return <sub key={sign}>{sign === '_' ? '.' : sign}</sub>;
      }
    });
    return element;
  };

  const renderPollutionsTable = () => {
    const elementsArr = [];
    for (let key in PollutionComponents) {
      elementsArr.push(
        <Fragment key={key}>
          <Grid item xs={12} sm={6} className={style.gridItem}>
            {getComponentName(key)}
          </Grid>
          <Grid item xs={12} sm={6} className={style.gridItem}>
            {pollutions[key]}
          </Grid>
        </Fragment>
      )
    }
  };

  return (
    <div className={style.div}>
      <Paper elevation={3} classes={{ root: style.root }}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={12} sm={6} className={style.gridItem}>
            COMPONENT
          </Grid>
          <Grid item xs={12} sm={6} className={style.gridItem}>
            μg/m<sup>3</sup>
          </Grid>

          {pollutions ? renderPollutionsTable() : <CircularProgress />}
        </Grid>
      </Paper>
    </div>
  );
}
