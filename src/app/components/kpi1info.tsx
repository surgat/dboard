import React, { useState, useEffect } from 'react';
import Divider from 'antd/lib/divider';
import { BulletContainer } from '@dboard/framework/react/charts/bullet-container';
import { TinyColumnContainer } from '@dboard/framework/react/charts/tinycolumn-container';
import Card from 'antd/lib/card';
import Typography from 'antd/lib/typography';
import { ServiceIncideentsTime } from './serviceIncideentsTime'
import { Col, Row, Statistic } from 'antd';
import { RadialBarContainer } from '@dboard/framework/react/charts/radialbar-container';
import { TinyLineContainer } from '@dboard/framework/react/charts/tinyline-container';
import Title from 'antd/lib/typography/Title';
import { Minibar2Container } from '@dboard/framework/react/charts/minibar2-component';
import { ColumnContainer } from '@dboard/framework/react/charts/column-container';
import { Column2Container } from '@dboard/framework/react/charts/column2-container';

type Props = {
    name: string
}

export const KPI1Info: React.FC<Props> = ({ name }) => {
    return (
        <Card size="small" title={name}>
            {/* <div style={{ textAlign: "center" }}>
                <Typography.Text>KPI</Typography.Text>
            </div>
            <BulletContainer />
            <div style={{ textAlign: "center" }}><Typography.Text>динамика за год</Typography.Text></div>
            <TinyColumnContainer />
            <Divider plain>Инциденты</Divider>
            */}
            <Row gutter={[8, 8]}>
                <Col span={24} style={{ textAlign: "center" }}>Всего: 1410 / 24% от управления</Col>
                <Col span={24}>
                    <Column2Container data={[
                        {
                            type: 'ВПИ',
                            sales: 1,
                        },
                        {
                            type: 'НПИ',
                            sales: 38,
                        },
                        {
                            type: 'В КПЭ',
                            sales: 10,
                        },
                    ]} height={150} />
                    {/* <RadialBarContainer height={150} data={[

                        // { name: "C", value: 20, color: 'red' },
                        // { name: "Без", value: 400, color: 'green' },
                        // { name: "Дубли", value: 1000, color: '#5793ff' },
                        // { name: "Всего", value: 1410 },
                    ]} /> */}
                </Col>
                <Col span={24}>
                    <Title level={5}>% заведённых автоматом за год</Title>
                    <div>
                        <TinyLineContainer />
                    </div>
                </Col>
                <Col span={24}>
                    <Title level={5}>Топ 3 причин инцидентов</Title>
                    <div>
                        <Minibar2Container height={150} data={[
                            {
                                label: 'ВПИ',
                                date: 'Дефект/Сбой оборудования',
                                value: 1,
                            },
                            {
                                label: 'НПИ',
                                date: 'Дефект/Сбой оборудования',
                                value: 15,
                            },
                            {
                                label: 'ВПИ',
                                date: 'Дефект/Сбой оборудования',
                                value: 5,
                            },
                            {
                                label: 'ВПИ',
                                date: 'Дефект СПО',
                                value: 5,
                            },
                            {
                                label: 'ВПИ',
                                date: 'Изменение',
                                value: 5,
                            },
                        ]} />
                    </div>
                </Col>

            </Row>
        </Card >
    )
}