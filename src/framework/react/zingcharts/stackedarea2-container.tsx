// @ts-nocheck

import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react';
// import Zingchart from './react-component';
import { Series } from '@dboard/framework/zingcharts';
import { Area } from '@ant-design/charts';
import PieChart from '@ant-design/charts/es/pie';
import { NormalModuleReplacementPlugin } from 'webpack';
import { property } from 'lodash';

interface StackedareaData {
  xValues: number[] | string[],
  series: Series[]
}

type Props = {
  data: StackedareaData;
}

const divStyles = {
  position: "absolute",
  background: 'rgba(255,255,255,0.95)',
  boxShadow: 'rgb(174, 174, 174) 0px 0px 10px',
  borderRadius: '4px',
} as CSSProperties;

const pieConfig = {
  width: 120,
  height: 120,
  appendPadding: 10,
  autoFit: false,
  angleField: 'value',
  colorField: 'type',
  legend: false,
  tooltip: false,
  animation: false,
  // color: line.chart.themeObject.colors10,
  label: {
    type: 'inner',
    offset: '-10%',
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
  },
};

export const Stackedarea2Container: FunctionComponent<Props> = ({ data }) => {

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
    // padding: "auto",
    // appendPadding: [8, 10, 0, 10],
    height: 400,
    data: charData,
    xField: 'date',
    yField: 'value',
    seriesField: 'name',
    // smooth: true,
    // lineStyle: ({ country }) => {
    //   const importantCountries = ['United States', 'France', 'Germany'];
    //   const idx = importantCountries.indexOf(country);
    //   return { lineWidth: idx !== -1 ? 2 : 1 };
    // },
    point: {
      size: 5,
      shape: 'diamond',
    },
    interactions: [{ type: 'brush' }],
    slider: {
      start: 0,
      end: 1,
    },
    tooltip: {
      follow: true,
      enterable: true,
      offset: 18,
      shared: true,
      marker: { lineWidth: 0.5, r: 3 },
      customContent: (title, items) => {
        const pieData = items.map((item) => ({
          type: item.name,
          value: Number(item.value),
        }));
        // const container = document.createElement('div');
        // const pieContainer = document.createElement('div');
        // setStyles(container, divStyles);
        // createPie(pieContainer, pieData);
        // container.appendChild(pieContainer);

        const config = {
          ...pieConfig,
          data: pieData
        }

        // @ts-ignore
        // @ts-nocheck
        return (
          <div style={divStyles}>
            <PieChart {...config} />
          </div>
        );
      },
    },
  };



  // @ts-ignore
  return <>
    <Area {...config} />
  </>;

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
