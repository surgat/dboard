import React, { FunctionComponent } from 'react';
import { Column, RadialBar } from '@ant-design/charts';

interface StackedareaData {
  name: string,
  value: number,
  color: string
}

type Props = {
  height?: number;
  data: StackedareaData[];
}

export const RadialBarContainer: FunctionComponent<Props> = ({ data, height }) => {

  // let charData = [] as any;

  // data.series.forEach((serie) => {
  //   serie.values.forEach((v, i) => {
  //     charData.push({
  //       date: data.xValues[i],
  //       value: v,
  //       name: serie.text
  //     });
  //   })
  // })

  let config = {
    data: data,
    xField: 'name',
    yField: 'value',
    radius: 1,
    innerRadius: 0.2,
    colorField: 'color',
    color: function color(_ref) {
      return _ref.color;
    },
  } as any;

  if (height) {
    config.height = height;
  }

  return <RadialBar {...config} />;
}
