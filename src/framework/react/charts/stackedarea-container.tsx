import React, { FunctionComponent, useEffect, useState } from 'react';
import { Series } from '@dboard/framework/zingcharts';
import { Area } from '@ant-design/charts';

interface StackedareaData {
  xValues: number[] | string[],
  series: Series[]
}

type Props = {
  height?: number;
  data: StackedareaData
  slider?: any;
}

export const StackedareaContainer: FunctionComponent<Props> = ({ data, height, slider }) => {

  let charData = [] as any;

  data.series.forEach((serie) => {
    serie.values.forEach((v, i) => {
      charData.push({
        date: data.xValues[i],
        value: v,
        name: serie.text
      });
    })
  })

  let config = {
    data: charData,
    xField: 'date',
    yField: 'value',
    seriesField: 'name',
    point: {
      size: 5,
      shape: 'diamond',
    }
  } as any;

  if (slider === undefined || slider === null) {
    config.slider = {
      start: 0,
      end: 1,
    };
  } else if (slider !== false) {
    config.slider = slider;
  }

  if (height) {
    config.height = height;
  }


  return <Area {...config} />;
}
