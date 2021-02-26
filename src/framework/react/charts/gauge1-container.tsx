import React, { FunctionComponent } from 'react';
import { Gauge } from '@ant-design/charts';

type Props = {
  name: string;
}

export const Gauge1Container: FunctionComponent<Props> = ({ name }) => {
  const config = {
    percent: 0.75,
    range: { color: 'l(0) 0:#bde8ff 1:#9ec9ff' },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: false,
    statistic: {
      title: {
        offsetY: -24,
        style: {
          fontSize: '24px',
          color: '#4B535E',
        },
        formatter: function formatter() {
          return '70%';
        },
      },
      content: {
        style: {
          fontSize: '16px',
          // lineHeight: '44px',
          color: '#4B535E',
        },
        formatter: function formatter() {
          return name;
        },
      },
    },
  };
  // @ts-ignore
  return <Gauge {...config} />;
}
