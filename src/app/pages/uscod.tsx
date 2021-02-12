import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import ChartContainer from '@app/components/interfaces/chart-container';
import { PieContainer } from '@framework/react/zingcharts/pie-component';
import { DeviceTable } from '../components/device-table';
import Statistic from 'antd/lib/statistic';
import Card from 'antd/lib/card';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { StackedareaContainer } from '@framework/react/zingcharts/stackedarea-container';

export const UsCODPage = () => (
    <>
        <Row>
            <Col xs={24} lg={16}>
                <StackedareaContainer id="Interfaces" name="Утилизация портов доступа" series={[
                    { text: "legacy up", values: [10, 8, 2, 0], lineColor: "red", backgroundColor: "red", marker: { backgroundColor: "red" } },
                    { text: "CLOS up", values: [40000, 41500, 41000, 42000], lineColor: "green", backgroundColor: "green", marker: { backgroundColor: "green" } },
                    { text: "CLOS free", values: [41000, 45000, 50000, 54000], lineColor: "gray", backgroundColor: "gray", marker: { backgroundColor: "gray" } },
                ]} />
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
            <Col span={8}>
                <Title level={4}>Статистика</Title>
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
            <Col span={8}>
                <DeviceTable data={[
                    { role: 'SS', prom: 88, stock: 117 },
                    { role: 'BG', prom: 12, stock: 169 },
                    { role: 'BL', prom: 95, stock: 880 },
                    { role: 'AG', prom: 617, stock: 1223 },
                    { role: 'AC', prom: 4536, stock: 1501 },
                    // { role: 'Всех', prom: 173767, stock: 95147 },
                ]} />
            </Col>
            <Col xs={24} lg={8}>
                <Row gutter={6}>
                    <Col span={12}>
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
                                title="KPI"
                                value={88.25}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
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
                                title="KPI"
                                value={46.25}
                                precision={2}
                                valueStyle={{ color: 'rgb(164, 164, 0)' }}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row >
    </>
);
