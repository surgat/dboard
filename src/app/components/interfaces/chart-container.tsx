import React, { useState } from 'react';

import { TimeseriesContainer } from '@framework/react/zingcharts/timeseries-container'
import { Series } from '@framework/zingcharts';

interface ChartContainer {
  legacyAllInterfaceCountList: number[];
  legacyLineStateUpCountList: number[];
  closAllInterfaceCountList: number[];
  closLineStateUpCountList: number[];
  scaleXList: number[];
}

let initialData: ChartContainer = {
  legacyAllInterfaceCountList: [1,2,3],
  legacyLineStateUpCountList: [3,2,1],
  closAllInterfaceCountList: [1,2,3],
  closLineStateUpCountList: [3,2,1],
  scaleXList: [1,2,3],
}

export default function ChartContainer() {
  let refreshInterval: number;

  const [data, setData] = useState<ChartContainer>(initialData);
  const [time, setTime] = useState<Date>(new Date());

  // useEffect(() => {
  //   refresh();
  //   refreshInterval = window.setInterval(refresh, 36000000);
  //   return () => clearInterval(refreshInterval);
  // }, [])

  // async function refresh() {
  //   try {
  //     let response = await axios.get('/api/front/interfaces/chart-data');
  //     setData(response.data as ChartContainer);
  //     setTime(new Date());
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  function createChartData(
    name = '' as string,
    line1 = [] as number[],
    line2 = [] as number[],
    scaleX = [] as number[]
  ) {
    const series = [
      {
        text: `${name} all interface`,
        values: line1,
        // lineColor: '#7ec23a',
        marker: {
          // backgroundColor: '#7ec23a'
        }
      },
      {
        text: `${name} line state up`,
        values: line2,
        // lineColor: '#eba100',
        marker: {
          // backgroundColor: '#eba100'
        }
      },
    ] as Series[];


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

    return series;
  }

  const chartConfig1 = createChartData(
    'legacy',
    data.legacyAllInterfaceCountList,
    data.legacyLineStateUpCountList,
    data.scaleXList
  );
  const chartConfig2 = createChartData(
    'CLOS',
    data.closAllInterfaceCountList,
    data.closLineStateUpCountList,
    data.scaleXList
  );

  return (
    <>
      <TimeseriesContainer id="newChartLegacy" name="legacy" series={chartConfig1} />
      <TimeseriesContainer id="newChartClos" name="CLOS" series={chartConfig2} />
    </>
  );
}

