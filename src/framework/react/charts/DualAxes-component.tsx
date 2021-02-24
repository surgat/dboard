import React, { useState, useEffect } from 'react';
import { Bar, Column } from '@ant-design/charts';

interface StackedareaData {
    label: string,
    v: string,
    value: number
}

type Props = {
    height?: number;
    data: StackedareaData[];
}

export const DualAxesContainer: React.FC<Props> = ({ data, height }) => {
    var config = {
        data: [data, data]
        xField: 'time',
        yField: ['value', 'count'],
        geometryOptions: [
            {
                geometry: 'column',
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

    return <Bar {...config} />;
};
