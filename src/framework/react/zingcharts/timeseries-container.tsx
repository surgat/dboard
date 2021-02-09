import React, { FunctionComponent } from 'react';
import Zingchart from './react-component';
import { timeseriesConfig, Series } from '@framework/zingcharts';

type Props = {
  id: string;
  name: string;
  series: Series[];
}

export const TimeseriesContainer: FunctionComponent<Props> = ({id, name, series}) => {

  function createChartData() {
    let chartData = {
      ...timeseriesConfig,
      series: series
    };

    chartData.title.text = name;

    // if (name === 'legacy') {
    //   return {
    //     ...chartData,
    //     scaleY: {
    //       ...chartData.scaleY,
    //       minorTick: {
    //         lineColor: '#E3E3E5'
    //       },
    //       minorTicks: 1,
    //       tick: {
    //         lineColor: '#E3E3E5'
    //       },
    //       ticks: 1,
    //     }
    //   }
    // }

    


    return chartData;
  }

  return (
      <Zingchart id={id} data={createChartData()} />
  );
}
