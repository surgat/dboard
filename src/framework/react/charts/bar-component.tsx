import React, { useState, useEffect } from 'react';
import { Bar, Column } from '@ant-design/charts';

interface StackedareaData {
    label: string,
    type: string,
    value: number
}

type Props = {
    height?: number;
    data: StackedareaData[];
}

export const BarContainer: React.FC<Props> = ({ data, height }) => {
    var config = {
        data: data,
        isGroup: true,
        xField: 'value',
        yField: 'label',
        seriesField: 'type',
        // legend: false,
        // xAxis: {
        //     label: null,
        //     grid: null,
        //     title: {
        //         text: "простой в ч",
        //     }
        // },
        // yAxis: {
        //     label: null,
        //     grid: null
        // },
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
            shared: false,
        },
        // tooltip: {
        //     customContent: (title, data) => {
        //         return `<div>Максимально ${title}</div>`;
        //     }
        // }
        // meta: {
        //     type: { alias: '' },
        //     sales: { alias: '' },
        // },
    } as any;

    if (height) {
        config.height = height;
    }

    return <Bar {...config} />;
};
