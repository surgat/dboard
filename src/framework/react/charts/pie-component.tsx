import React, { FunctionComponent } from 'react';
import { Pie } from '@ant-design/charts';

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

export interface PieSeries {
  text: string,
  value: number
}

type Props = {
  id: string;
  name: string;
  series: PieSeries[];
}

export const PieContainer: FunctionComponent<Props> = ({ id, name, series }) => {

  const data = series.map((el) => ({ type: el.text, value: el.value }));

  const config = {
    // appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.6,
    label: {
      type: 'outer',
      // type: 'inner',
      content: '{percentage}',
    },
    // content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  };

  return <div><Pie {...config} /></div>;
}
