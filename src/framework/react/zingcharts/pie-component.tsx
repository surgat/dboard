import React, { FunctionComponent } from 'react';
import { pieConfig, Series } from '@framework/zingcharts';
import Zingchart from './react-component';

const colors = [
  "#e25568",
  "#e28957",
  "#e1cf57",
  "#aee256",
  "#68e156",
  "#56e288",
  "#56e2cf",
  "#56aee2",
  "#5668e1",
  "#8956e1",
  "#cf56e2",
  "#e256ae",
];

type Props = {
  id: string;
  name: string;
  series: Series[];
}

export const PieContainer: FunctionComponent<Props> = ({ id, name, series }) => {
  let chartData = { ...pieConfig(), series: series };
  chartData.title.text= name;
  return (
    <Zingchart id={id} key={id} data={chartData} />
  );
}
