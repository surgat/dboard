import React, { FunctionComponent } from 'react';
import { Line } from '@ant-design/charts';

interface Data {
  date: string,
  value: number
}

type Props = {
  height?: number;
  data: Data[];
}

export const TimeseriesContainer: FunctionComponent<Props> = ({ height, data }) => {

  let config = {
    data: data,
    padding: 'auto',
    xField: 'date',
    yField: 'value',
    xAxis: {
      // type: 'timeCat',
      // tickCount: 5,
    },
    point: {
      size: 5,
      shape: 'diamond',
    }
  } as any;

  if (height) {
    config.height = height;
  }

  return (
    <>
      <Line {...config} />
    </>
  );
}
