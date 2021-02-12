import React, { FunctionComponent } from 'react';
import Zingchart from './react-component';
import { stackedareaConfig, Series } from '@framework/zingcharts';

type Props = {
  id: string;
  name: string;
  series: Series[];
}

export const StackedareaContainer: FunctionComponent<Props> = ({ id, name, series }) => {

  let chartData = {
    ...stackedareaConfig(),
    series: series
  };

  chartData.title.text = name;

  return (
    <>
      <Zingchart id={id} data={chartData} />
    </>
  );
}
