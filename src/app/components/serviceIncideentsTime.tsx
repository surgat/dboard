import React, { useState, useEffect } from 'react';
import { Bar, Column } from '@ant-design/charts';

export const ServiceIncideentsTime: React.FC = () => {
    var data = [
        {
            type: 'Без',
            hours: 4,
        },
        {
            type: 'C',
            hours: 2,
        },
    ];
    var config = {
        data: data,
        xField: 'hours',
        yField: 'type',
        seriesField: 'type',
        legend: false,
        xAxis: {
            label: null,
            grid: null,
            title: {
                text: "простой в ч",
            }
        },
        yAxis: {
            label: null,
            grid: null
        },
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
            shared: false,
        },
        tooltip: {
            customContent: (title, data) => {
                return `<div>Максимально ${title}</div>`;
            }
        }
        // meta: {
        //     type: { alias: '' },
        //     sales: { alias: '' },
        // },
    };

    // @ts-ignore
    return <Bar {...config} />;
};
