import React, { FunctionComponent } from 'react';
import Zingchart from './react-component';
import { gaugeConfig, Series } from '../../zingcharts';

type Props = {
  id: string;
  name: string;
  series: Series[];
}

export const GaugeContainer: FunctionComponent<Props> = ({ id, name, series }) => {

  let chartData = {
    ...gaugeConfig(),
    series: series
  };

  chartData.title.text = name;

  return (
    <>
      <Zingchart id={id} data={chartData} />
    </>
  );
}
