import React, { FunctionComponent } from 'react';
import Zingchart from './react-component';
import { timeseriesConfig, Series } from '@dboard/framework/zingcharts';

type Props = {
  id: string;
  name: string;
  series: Series[];
}

export const TimeseriesContainer: FunctionComponent<Props> = ({ id, name, series }) => {

  let chartData = {
    ...timeseriesConfig(),
    series: series
  };

  chartData.title.text = name;

  return (
    <>
      <Zingchart id={id} data={chartData} />
    </>
  );
}
