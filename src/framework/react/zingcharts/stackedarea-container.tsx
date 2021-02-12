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

export const StackedareaContainer: FunctionComponent<Props> = ({ data }) => {

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

  const config = {
    data: charData,
    xField: 'date',
    yField: 'value',
    seriesField: 'name',
    point: {
      size: 5,
      shape: 'diamond',
    },
    slider: {
      start: 0,
      end: 1,
    },
  };



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
