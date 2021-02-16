import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

export const ServiceIncideents: React.FC = () => {
    var data = [
        {
            type: 'С влиянием',
            value: 27,
        },
        {
            type: 'Без влияния',
            value: 25,
        }
    ];
    var config = {
        // appendPadding: 10,
        height: 100,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        legend: false,
        label: {
            type: 'inner',
            offset: '-50%',
            style: { textAlign: 'center' },
            autoRotate: false,
            content: '{value}',
        },
        interactions: [
            { type: 'element-selected' },
            { type: 'element-active' },
            // { type: 'pie-statistic-active' },
        ],
        statistic: {
            title: {
                style: {
                    fontSize: 8,
                },
                formatter: function formatter() {
                    return 'Всего';
                },
            },
            content: {
                style: {
                    fontSize: 12,
                },
            },
        }
    };

    // @ts-ignore
    return <Pie {...config} />;
};
