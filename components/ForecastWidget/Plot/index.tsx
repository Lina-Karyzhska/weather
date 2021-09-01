import { useEffect, useState } from 'react';
import { LineChart, XAxis, Line, LabelList } from 'recharts';
import styles from '../styles/Styles.module.css';
import { PlotData } from '../../../types';
import { renderCustomizedLabel } from './Label';
import AxisTick from './AxisTick';

interface IPlot {
  data: PlotData[],
  size: | 'full' | 'half',
}

const Plot: React.FC<IPlot> = ({ data, size }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const getWidth = () => {
    if (size == 'full') {
      if (windowSize.width >= 900) {
        return windowSize.width / 2 - (4 * windowSize.width) / 100;
      } else {
        return windowSize.width * 0.8 - (6 * windowSize.width) / 100;
      }
    } else {
      if (windowSize.width >= 900) {
        return (windowSize.width / 2 - (2 * windowSize.width) / 100) * 0.55;
      } else {
        return (windowSize.width * 0.8 - (4 * windowSize.width) / 100) * 0.55;
      }
    }
  };

  const listener = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return (
    <div className={styles.forecast__legend}>
      <LineChart
        width={getWidth()}
        height={(17 * windowSize.height) / 100 - 20}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis
          type="category"
          interval="preserveStart"
          axisLine={false}
          tickLine={false}
          dataKey="time"
          orientation="top"
          tick={<AxisTick />}
        />
        <Line dot={false} type="linear" dataKey="uv" stroke="#008bfa" yAxisId={0}>
          <LabelList
            dataKey="day"
            position="inside"
            angle={10}
            color="#008bfa"
            content={renderCustomizedLabel}
          />
        </Line>
      </LineChart>

      {data[0].pv ? (
        <LineChart
          width={getWidth()}
          height={(17 * windowSize.height) / 100 - 20}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <Line dot={false} type="linear" dataKey="pv" stroke="#0437c6" yAxisId={0}>
            <LabelList
              dataKey="night"
              position="inside"
              angle={10}
              color="#0437c6"
              content={renderCustomizedLabel}
            />
          </Line>
        </LineChart>
      ) : null}

      <LineChart
        width={getWidth()}
        height={20}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis
          type="category"
          interval="preserveStart"
          axisLine={false}
          tickLine={false}
          dataKey="wind"
          orientation="bottom"
          tick={<AxisTick />}
        />
      </LineChart>
    </div>
  );
}

export default Plot;
