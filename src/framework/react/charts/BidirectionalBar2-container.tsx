import React, { useState, useEffect } from 'react';
import { BidirectionalBar } from '@ant-design/charts';

interface Data {
  xValue: string,
  valuePositive: number,
  valueNegative?: number,
  group: string
}

type Props = {
  height?: number;
  data: Data[];
  meta?: any
}

export const BidirectionalBar2Container: React.FC<Props> = ({ height, data, meta }) => {

  var config = {
    data: data,
    // width: 400,
    // height: 400,
    layout: 'vertical',
    xField: 'xValue',
    yField: ['valuePositive', 'valueNegative'],
    groupField: 'group',
    // isGroup: true,
    isStack: true,
    // seriesField: 'name',
    // groupField: 'type',
    // yAxis: {
    //   '2016年耕地总面积': { nice: true },
    //   '2016年转基因种植面积': {
    //     min: 0,
    //     max: 100,
    //   },
    // },
    // tooltip: {
    //   shared: true,
    //   showMarkers: false,
    // }
  } as any;

  if (meta) {
    config.meta = meta;
  }

  if (height) {
    config.height = height;
  }

  return <BidirectionalBar {...config} />;
};
