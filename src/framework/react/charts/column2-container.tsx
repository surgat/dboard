import React, { FunctionComponent } from 'react';
import { Series } from '../../zingcharts';
import { Column } from '@ant-design/charts';

interface StackedareaData {
  xValues: number[] | string[],
  series: Series[]
}

type Props = {
  height?: number;
  data: any;
}

export const Column2Container: FunctionComponent<Props> = ({ data, height }) => {

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
    xField: 'type',
    yField: 'sales',
    // label: {
    //   position: 'middle',
    //   style: {
    //     fill: '#FFFFFF',
    //     opacity: 0.6,
    //   },
    // }
  } as any;

  if (height) {
    config.height = height;
  }


  return <Column {...config} />;
}
