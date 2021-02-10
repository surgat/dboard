
import React, { useState, useEffect, useRef } from 'react';

import TopGraph from './top-graph';
import BottomGraph from './bottom-graph';
import Legend from '../../legend/legend';
import { UtilizationSchedule } from '../type';
import { ARROW_COLORS } from '../constants';

import './chart-container.scss';

const height = 100;

export function UtilizationScheduleChart() {
  const [data, setData] = useState<UtilizationSchedule>({top: [], bottom:[]});
  const [width, setWidth] = useState<number>(700);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchData();
    handleResizeEvent();
  }, []);

  function fetchData() {
    Promise.resolve().then(() => {
      setData(
        {
          top: [
            {
              name: 'internet',
              area: '',
              in: [200, 400],
              out: [80, 150],
            },
            {
              name: 'Web',
              area: 'DMZ',
              in: [200, 400],
              out: [90, 150],
            },
            {
              name: 'Back',
              area: 'Sigma',
              in: [200, 400],
              out: [50, 150],
            },
            {
              name: 'ШПУ',
              area: 'GWN',
              in: [180, 300],
              out: [90, 150],
            },
            {
              name: 'БД',
              area: 'Alpha',
            },
          ],
          bottom: [
            {
              name: 'WAN',
              in: [250, 400],
              out: [90, 150],
            },
            {
              name: 'ФПСУ',
              in: [220, 400],
              out: [100, 200],
            },
            {
              name: 'ФПСУ',
              in: [200, 400],
              out: [30, 150],
            },
            {
              name: 'ШПУ',
              in: [200, 400],
              out: [90, 150],
            },
            {
              name: 'БД',
              in: [230, 400],
              out: [80, 150],
            },
            {
              name: 'БД',
            },
          ]
        }
      )
    });
  }

  function handleResizeEvent() {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if(ref && ref.current) {
          setWidth(ref.current.offsetWidth);
        }
      }, 200);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }

  return (
    <div className="UtilizationSchedule" ref={ref}>
      <p className="UtilizationSchedule__title">Utilization schedule</p>
      <Legend data={ARROW_COLORS}/>
      <TopGraph height={height} width={width} data={data.top} />
      <BottomGraph height={height} width={width} data={data.bottom} />
    </div>
  );
}
