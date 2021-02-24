import React, { useState, useEffect } from 'react';
import { TinyLine } from '@ant-design/charts';

export const TinyLineContainer: React.FC = () => {
    var data = [
        264,
        417,
        438,
        887,
        309,
        397,
        550,
        575,
        563,
        430,
        525,
        592,
        492,
        467,
        513,
        546,
        983,
        340,
        539,
        243,
        226,
        192,
    ];
    var config = {
        height: 60,
        // width: 300,
        autoFit: true,
        data: data,
        smooth: true,
        // tooltip: false,
        // annotations: [
        //     {
        //         type: 'line',
        //         start: ['min', 'mean'],
        //         end: ['max', 'mean'],
        //         text: {
        //             content: '',
        //             offsetY: -2,
        //             style: {
        //                 textAlign: 'left',
        //                 fontSize: 10,
        //                 fill: 'red',
        //                 textBaseline: 'bottom',
        //             },
        //         },
        //         style: { stroke: 'red' },
        //     },
        //     {
        //         type: 'line',
        //         start: ['min', 800],
        //         end: ['max', 800],
        //         text: {
        //             content: '',
        //             offsetY: -2,
        //             style: {
        //                 textAlign: 'left',
        //                 fontSize: 10,
        //                 fill: 'green',
        //                 textBaseline: 'bottom',
        //             },
        //         },
        //         style: { stroke: 'green' },
        //     },
        // ],
    };
    // @ts-ignore
    return <TinyLine {...config} />;
};
