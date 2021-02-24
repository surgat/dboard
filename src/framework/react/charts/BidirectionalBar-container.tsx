import React, { useState, useEffect } from 'react';
import { BidirectionalBar } from '@ant-design/charts';

interface Data {
  label: string,
  valuePositive: number,
  valueNegative?: number,
}

type Props = {
  height?: number;
  data: Data[];
  meta?: any
}

export const BidirectionalBarContainer: React.FC<Props> = ({ height, data, meta }) => {

  var config = {
    data: data,
    // width: 400,
    // height: 400,
    layout: 'vertical',
    xField: 'label',
    yField: ['valuePositive', 'valueNegative'],
    // yAxis: {
    //   '2016年耕地总面积': { nice: true },
    //   '2016年转基因种植面积': {
    //     min: 0,
    //     max: 100,
    //   },
    // },
    tooltip: {
      shared: true,
      showMarkers: false,
    }
  } as any;

  if (meta) {
    config.meta = meta;
  }

  if (height) {
    config.height = height;
  }

  return <BidirectionalBar {...config} />;
};
