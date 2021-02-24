import React, { FunctionComponent } from 'react';
import { Series } from '../../zingcharts';
import { Column } from '@ant-design/charts';

interface StackedareaData {
  xValues: number[] | string[],
  series: Series[]
}

type Props = {
  height?: number;
  data: StackedareaData;
}

export const ColumnContainer: FunctionComponent<Props> = ({ data, height }) => {

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
    isGroup: true,
    xField: 'date',
    yField: 'value',
    seriesField: 'name',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  } as any;

  if (height) {
    config.height = height;
  }


  return <Column {...config} />;
}
