import React, { FunctionComponent } from 'react';
// import { Series } from '../../zingcharts';
import { Column } from '@ant-design/charts';


interface Series {
  text: string;
  group: string;
}

interface Data {
  xValue: string;
  values: number[];
}

interface StackedareaData {
  // xValues: number[] | string[],
  series: Series[];
  data: Data[];
}



type Props = {
  height?: number;
  data: StackedareaData;
}

export const GroupedColumn: FunctionComponent<Props> = ({ data, height }) => {

  let charData = [] as any;

  let serie: Series;
  data.data.forEach((el) => {
    el.values.forEach((v, i) => {
      serie = data.series[i];
      charData.push({
        date: el.xValue,
        value: v,
        name: serie.group,
        type: serie.text
      });
    });
  });

  // data.series.forEach((serie) => {
  //   serie.values.forEach((v, i) => {
  //     charData.push({
  //       date: data.xValues[i],
  //       value: v,
  //       name: "",
  //       type: serie.text
  //     });
  //   })
  // })

  let config = {
    data: charData,
    xField: 'date',
    yField: 'value',
    isGroup: true,
    isStack: true,
    seriesField: 'name',
    groupField: 'type',
    // label: {
    //   position: 'middle',
    //   layout: [
    //     { type: 'interval-adjust-position' },
    //     { type: 'interval-hide-overlap' },
    //     { type: 'adjust-color' },
    //   ],
    // },
  } as any;

  if (height) {
    config.height = height;
  }


  return <Column {...config} />;
}
