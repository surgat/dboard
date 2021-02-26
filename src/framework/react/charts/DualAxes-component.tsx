import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';
import { Series } from '../../zingcharts';

interface StackedareaData {
    xValues: number[] | string[],
    series: Series[],
    lineValue: number[]
}

type Props = {
    height?: number;
    data: StackedareaData;
    meta?: any
}

export const DualAxesContainer: React.FC<Props> = ({ data, meta, height }) => {

    let lineData = [] as any;
    let columnData = [] as any;

    data.xValues.forEach((xValue, i) => {
        data.series.forEach((serie) => {
            columnData.push({
                date: xValue,
                value: serie.values[i],
                name: serie.text,
                color: serie.color
            });
        });

        lineData.push({
            date: xValue,
            count: data.lineValue[i]
        });
    });

    let config = {
        data: [columnData, lineData],
        xField: 'date',
        yField: ['value', 'count'],
        geometryOptions: [
            {
                geometry: 'column',
                isStack: true,
                isPercent: true,
                seriesField: 'name',
                colorField: 'color',
            },
            {
                geometry: 'line',
                lineStyle: {
                    lineWidth: 2,
                },
            },
        ],
    } as any;

    if (height) {
        config.height = height;
    }

    if (meta) {
        config.meta = meta;
    }

    return <DualAxes {...config} />;
};
