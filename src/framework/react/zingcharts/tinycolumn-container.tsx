import React, { useState, useEffect } from 'react';
import { TinyColumn } from '@ant-design/charts';

export const TinyColumnContainer: React.FC = () => {
    var data = [274, 337, 81, 497, 666, 219, 269];
    var config = {
        height: 64,
        // width: 240,
        autoFit: false,
        data: data,
        tooltip: false,
        annotations: [
            {
                type: 'line',
                start: ['min', 'mean'],
                end: ['max', 'mean'],
                text: {
                    content: 'Порог',
                    offsetY: -2,
                    style: {
                        textAlign: 'left',
                        fontSize: 10,
                        fill: 'rgba(44, 53, 66, 0.45)',
                        textBaseline: 'bottom',
                    },
                },
                style: { stroke: 'rgba(0, 0, 0, 0.25)' },
            },
        ],
    };
    // @ts-ignore
    return <TinyColumn {...config} />;
};
