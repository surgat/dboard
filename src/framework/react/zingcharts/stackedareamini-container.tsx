import React, { FunctionComponent, useEffect, useState } from 'react';
// import Zingchart from './react-component';
import { Series } from '@dboard/framework/zingcharts';
import { Area } from '@ant-design/charts';

interface StackedareaData {
  xValues: number[] | string[],
  series: Series[]
}

type Props = {
  data: StackedareaData;
}

export const StackedareaminiContainer: FunctionComponent<Props> = ({ data }) => {
  let charData = [] as any;
  let colors = [] as string[];

  data.series.forEach((serie) => {
    serie.color && colors.push(serie.color);
    serie.values.forEach((v, i) => {
      charData.push({
        date: data.xValues[i],
        value: v,
        name: serie.text
      });
    })
  });

  let config = {
    height: 80,
    data: charData,
    xField: 'date',
    yField: 'value',
    seriesField: 'name',
    legend: false,
    point: {
      size: 5,
      shape: 'diamond',
    },
    xAxis: {
      label: null,
    },
    yAxis: {
      label: null,
      grid: null
    },
    smooth: true
  } as any;

  if (colors.length > 0) {
    config.theme = {
      styleSheet: {
        brandColor: colors[0],
        paletteQualitative10: colors,
        paletteQualitative20: colors
      }
    }
  }

  // @ts-ignore
  return <Area {...config} />;

  // let chartData = {
  //   ...stackedareaConfig(),
  //   series: series
  // };

  // chartData.title.text = name;

  // return (
  //   <>
  //     <Zingchart id={id} data={chartData} />
  //   </>
  // );
}
