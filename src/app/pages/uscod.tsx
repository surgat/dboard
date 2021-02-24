import React from 'react';
import { Row, Col } from 'antd/lib/grid';
// import ChartContainer from '@dboard/app/components/interfaces/chart-container';
import { PieContainer } from '@dboard/framework/react/charts/pie-component';
import { DeviceTable } from '../components/device-table';
import Statistic from 'antd/lib/statistic';
import Card from 'antd/lib/card';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { StackedareaContainer } from '@dboard/framework/react/charts/stackedarea-container';
import { ColumnContainer } from '@dboard/framework/react/charts/column-container';
import { Problems } from '../components/problems';


export const UsCODPage = () => (
    <>
        <Row justify="space-around" align="middle">
            <Col xs={24} lg={16}>
                <Title level={4}>Клиентские интерфейсы</Title>
                <StackedareaContainer height={350} data={{
                    xValues: ["2020.10", "2020.11", "2020.12", "2021.01"],
                    series: [
                        { text: "legacy up", values: [10, 8, 2, 0], color: "red" },
                        { text: "CLOS up", values: [40000, 41500, 41000, 42000], color: "green" },
                        { text: "CLOS free", values: [41000, 45000, 50000, 54000], color: "gray" },
                    ]
                }} />
            </Col>
            <Col xs={24} lg={8}>
                <Title level={4}>Скорость портов</Title>
                <PieContainer id="SpeedPie" name="Скорость портов" series={[
                    {
                        text: "Other",
                        value: 60
                    },
                    {
                        text: "1GB",
                        value: 92
                    },
                    {
                        text: "10GB",
                        value: 221
                    },
                    {
                        text: "40GB",
                        value: 136
                    },
                    {
                        text: "100GB",
                        value: 30
                    }
                ]} />
            </Col>
        </Row>
        <Row gutter={18}>
            <Col xs={24} lg={8}>
                <Title level={4}>Ёмоксть</Title>
                <Card size="small">
                    <Row>
                        <Col span={12}>
                            <Statistic
                                title="Клиентских портов"
                                value={96000}
                            />
                            <Statistic
                                title="Свободных клиентских портов"
                                value={54000}
                            />
                            <Statistic
                                title="% cвободных клиентских портов"
                                value={56.25}
                                precision={2}
                                suffix="%"
                            />
                        </Col>
                        <Col span={12}>
                            <Statistic
                                title="Изменение за квартал"
                                value={20.45}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                            <Statistic title="Изменение за квартал"
                                value={10.05}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%" />
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col xs={24} lg={10}>
                <Title level={4}>Количество устройств</Title>
                <div>
                    <ColumnContainer height={250} data={{
                        xValues: ["2020.12", "2021.01"],
                        series: [
                            { text: "Ядро", values: [856, 880] },
                            { text: "Клиентские", values: [4000, 4536] },
                        ]
                    }} />
                </div>
                {/* <DeviceTable data={[
                    { role: 'Ядро', prom: 856, stock: 880 },
                    { role: 'Клиентские', prom: 4536, stock: 1501 },
                ]} /> */}
            </Col>
            <Col xs={24} lg={6}>
                <Title level={4}>Проблемы/Риски/Уязвимости</Title>
                <div>
                    <Problems />
                </div>
                {/* <Row gutter={6}>
                    <Col span={8}>
                        <Title level={4}>Проблемы</Title>
                        <Card size="small">
                            <Statistic
                                title="Пришло"
                                value={96}
                            />
                            <Statistic
                                title="Решено"
                                value={80}
                            />
                            <Statistic
                                title="КПЭ"
                                value={88.25}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Title level={4}>Риски</Title>
                        <Card size="small">
                            <Statistic
                                title="Пришло"
                                value={96}
                            />
                            <Statistic
                                title="Решено"
                                value={80}
                            />
                            <Statistic
                                title="КПЭ"
                                value={88.25}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Title level={4}>Уязвимости</Title>
                        <Card size="small">
                            <Statistic
                                title="Пришло"
                                value={96}
                            />
                            <Statistic
                                title="Решено"
                                value={80}
                            />
                            <Statistic
                                title="КПЭ ДКБ"
                                value={46.25}
                                precision={2}
                                valueStyle={{ color: 'rgb(164, 164, 0)' }}
                                suffix="%"
                            />
                            <Statistic
                                title="КПЭ ДТН"
                                value={46.25}
                                precision={2}
                                valueStyle={{ color: 'rgb(164, 164, 0)' }}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row> */}
            </Col>
        </Row >
    </>
);
