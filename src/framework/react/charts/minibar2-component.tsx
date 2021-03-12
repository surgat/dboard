import React, { useState, useEffect } from 'react';
import { Bar, Column } from '@ant-design/charts';

interface StackedareaData {
    label: string,
    date: string,
    value: number
}

type Props = {
    height?: number;
    data: StackedareaData[];
    meta?: any;
}

export const Minibar2Container: React.FC<Props> = ({ data, meta, height }) => {
    var config = {
        data: data,
        // isGroup: true,
        xField: 'date',
        yField: 'value',
        seriesField: 'label',
        // legend: false,
        isStack: true,
        colorField: 'label',
        color: function color(_ref) {
            if (_ref.label == 'ВПИ') {
                return '#61779a';
            }

            // if (_ref.label == 'mid') {
            //     return '#5793ff';
            // }

            if (_ref.label == 'НПИ') {
                return '#00dea6';
            }
        },
        xAxis: {
            label: {
                autoHide: false,
                autoEllipsis: true,
                formatter: (text) => {
                    return text.length > 5 ? text.substring(0, 5) + "..." : text
                }
            }
        }
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
        // label: {
        //     position: 'middle',
        //     style: {
        //         fill: '#FFFFFF',
        //         opacity: 0.6,
        //     },
        //     shared: false,
        // },
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

    if (meta) {
        config.meta = meta;
    }

    return <Column {...config} />;
};
