import React, { useState, useEffect } from 'react';
import Divider from 'antd/lib/divider';
import { BulletContainer } from '@dboard/framework/react/charts/bullet-container';
import { TinyColumnContainer } from '@dboard/framework/react/charts/tinycolumn-container';
import Card from 'antd/lib/card';
import { StackedareaContainer } from '@dboard/framework/react/charts/stackedarea-container';
import { StackedareaminiContainer } from '@dboard/framework/react/charts/stackedareamini-container';

type Props = {
    name: string
}

export const RequestsInfo: React.FC<Props> = ({ name }) => {
    return (
        <Card size="small" title={name}>
            <StackedareaminiContainer data={{
                xValues: ["2020.10", "2020.11", "2020.12", "2021.01"],
                series: [
                    { text: "Не сделано", values: [10, 8, 2, 10], color: "red" },
                    { text: "Зарегистрировано", values: [40, 41, 41, 42], color: "green" },
                ]
            }} />
        </Card>
    )
}