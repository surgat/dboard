
import React, { useState, useEffect, useRef } from 'react';
// import moment from 'moment';

import Legend from '../../../legend/legend';
import ChartView from './chart-view';
import { VOLS, VOLSPoint, VOLSLineStatus } from '../type';
import { ARROW_COLORS } from '../constants';

import './chart-container.scss';

const height = 400;

export default function VOLSChartContainer() {
  const [data, setData] = useState<{ [key in VOLS]?: VOLSPoint }>({});
  const [width, setWidth] = useState<number>(700);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchData();
    handleResizeEvent();
  }, []);

  function fetchData() {
    Promise.resolve().then(() => {
      setData({
        'scolcovo': {
          name: 'Сколково',
          data: {
            'm10': [
              {
                name: 'A4',
                status: VOLSLineStatus.ok,
              }
            ],
            'm9': [
              {
                name: 'A2',
                status: VOLSLineStatus.ok,
              },
            ],
            'south': [
              {
                name: 'D1',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'D2',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'B1',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'B2',
                status: VOLSLineStatus.ok,
              },
            ],
          }
        },
        'm10': {
          name: 'M10',
          data: {
            'ba86': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
            'south': [
              {
                name: 'A3',
                status: VOLSLineStatus.ok,
              },
            ],
            'scolcovo': [
              {
                name: 'A4',
                status: VOLSLineStatus.ok,
              }
            ]
          }
        },
        'm9': {
          name: 'M9',
          data: {
            'b19': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
            'south': [
              {
                name: 'A1',
                status: VOLSLineStatus.ok,
              },
            ],
            'scolcovo': [
              {
                name: 'A2',
                status: VOLSLineStatus.ok,
              }
            ]
          }
        },
        'ba86': {
          name: 'БА8-6',
          data: {
            'b19': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
            'south': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
            'm10': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
          }
        },
        'b19': {
          name: 'B19',
          data: {
            'south': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
            'm9': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
            'ba86': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
          }
        },
        'south': {
          name: 'Южный порт',
          data: {
            'scolcovo': [
              {
                name: 'D1',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'D2',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'B1',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'B2',
                status: VOLSLineStatus.ok,
              },
            ],
            'm10': [
              {
                name: 'A3',
                status: VOLSLineStatus.ok,
              },
            ],
            'm9': [
              {
                name: 'A1',
                status: VOLSLineStatus.ok,
              },
            ],
            'b19': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
            'ba86': [
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
              {
                name: 'NA',
                status: VOLSLineStatus.ok,
              },
            ],
          }
        }
      }
      );
    }
    )
  }

  function handleResizeEvent() {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (ref && ref.current) {
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
    <div className="VOLSChart" ref={ref}>
      <p className="VOLSChart__title">FOCL topology</p>
      <Legend data={ARROW_COLORS} />
      <ChartView data={data} width={width} height={height} />
    </div>
  );
}
