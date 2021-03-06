import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

export const BulletContainer: React.FC = () => {
    var data = [
        {
            title: '',
            ranges: [100],
            measures: [80],
            target: 85,
        },
    ];
    var config = {
        height: 10,
        data: data,
        measureField: 'measures',
        rangeField: 'ranges',
        targetField: 'target',
        xField: 'title',
        color: {
            range: '#5B8FF9',
            measure: '#5B8FF9',
            target: '#5B8FF9',
        },
        xAxis: { line: null },
        yAxis: false,
        // legend: {
        //     custom: true,
        //     position: 'bottom',
        //     items: [
        //         {
        //             value: '实际值',
        //             name: '实际值',
        //             marker: {
        //                 symbol: 'square',
        //                 style: {
        //                     fill: '#5B8FF9',
        //                     r: 5,
        //                 },
        //             },
        //         },
        //         {
        //             value: '目标值',
        //             name: '目标值',
        //             marker: {
        //                 symbol: 'line',
        //                 style: {
        //                     stroke: '#5B8FF9',
        //                     r: 5,
        //                 },
        //             },
        //         },
        //     ],
        // },
    };
    // @ts-ignore
    return <Bullet {...config} />;
};
