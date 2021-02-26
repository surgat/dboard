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

type Props = {
    name: string
}

export const KPI1Info: React.FC<Props> = ({ name }) => {
    return (
        <Card size="small" title={name}>
            <div style={{ textAlign: "center" }}>
                <Typography.Text>KPI</Typography.Text>
            </div>
            {/* <Divider plain>KPI</Divider> */}
            {/* <Space direction="vertical"> */}
            <BulletContainer />
            <div style={{ textAlign: "center" }}><Typography.Text>динамика за год</Typography.Text></div>
            {/* <Divider plain>динамика за год</Divider> */}
            <TinyColumnContainer />
            {/* </Space> */}
            <Divider plain>Инциденты</Divider>
            {/* <div>
                <RadialBarContainer height={100} data={[
                    // { name: "Дубли", value: 1000 },
                    { name: "C", value: 20 },
                    { name: "Без", value: 1400 },
                    // { name: "Всего", value: 1410 },
                ]} />
            </div> */}
            {/* <div>
                <ColumnContainer height={250} data={{
                    xValues: ["2020.12", "2021.01"],
                    series: [
                        { text: "C", values: [20, 10] },
                        { text: "Без", values: [1400, 1500] },
                    ]
                }} />
            </div> */}
            {/* <Typography.Text>Инциденты</Typography.Text> */}
            {/* <Statistic title="Общее количество" value={112893} /> */}
            <Row gutter={[8, 8]}>
                <Col span={24} style={{ textAlign: "center" }}>Всего: 1410 / 24% от управления</Col>
                <Col span={12}>
                    <RadialBarContainer height={150} data={[
                        { name: "C", value: 20, color: 'red' },
                        { name: "Без", value: 400, color: 'green' },
                        // { name: "Дубли", value: 1000, color: '#5793ff' },
                        // { name: "Всего", value: 1410 },
                    ]} />
                </Col>
                <Col span={12}>
                    <ServiceIncideentsTime />
                </Col>
                <Col span={24}>
                    <Title level={5}>% заведённых автоматом за год</Title>
                    <div>
                        <TinyLineContainer />
                    </div>
                </Col>
                <Col span={24}>
                    <Title level={5}>Топ 3 дефектов</Title>
                    <div>
                        <Minibar2Container height={100} data={[
                            {
                                label: 'hig',
                                date: 'Дефект/Сбой оборудования',
                                value: 1,
                            },
                            {
                                label: 'mid',
                                date: 'Дефект/Сбой оборудования',
                                value: 15,
                            },
                            {
                                label: 'hig',
                                date: 'Дефект/Сбой оборудования',
                                value: 5,
                            },
                            {
                                label: 'hig',
                                date: 'Дефект СПО',
                                value: 5,
                            },
                            {
                                label: 'hig',
                                date: 'Изменение',
                                value: 5,
                            },
                        ]} />
                    </div>
                </Col>

            </Row>
        </Card>
    )
}