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
    layout: 'vertical',
    xField: 'label',
    yField: ['valuePositive', 'valueNegative'],
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
