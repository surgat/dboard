import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import Title from 'antd/lib/typography/Title';
import { IncidentTable } from '@dboard/app/components/incident-table';
import { ClosedIncidentTable } from '@dboard/app/components/closed-incident-table';
import { KPI1Info } from '../components/kpi1info'
import { RequestsInfo } from '../components/requestsInfo'

import { Stackedarea2Container } from '@dboard/framework/react/charts/stackedarea2-container';
import { MinibarContainer } from '@dboard/framework/react/charts/minibar-component';
import { BidirectionalBarContainer } from '@dboard/framework/react/charts/BidirectionalBar-container';
import { DualAxesContainer } from '@dboard/framework/react/charts/DualAxes-component';
import { Minibar2Container } from '@dboard/framework/react/charts/minibar2-component';
import { GroupedColumn } from '@dboard/framework/react/charts/groupedColumn';


export const ActivePage = () => (<>
    <Title level={3}>Объём инцидентов</Title>
    <Row gutter={[8, 8]}>
        <Col xs={24} lg={18}>
            <GroupedColumn data={{
                series: [
                    { text: "новых", group: 'новых высоких' },
                    { text: "новых", group: 'новых средних' },
                    { text: "новых", group: 'новых низких' },
                    { text: "в работе", group: 'в работе высоких' },
                    { text: "в работе", group: 'в работе средних' },
                    { text: "в работе", group: 'в работе низких' },
                    { text: "закрыто", group: 'закрыто высоких' },
                    { text: "закрыто", group: 'закрыто средних' },
                    { text: "закрыто", group: 'закрыто низких' },
                ],
                data: [
                    {
                        xValue: '2020.08',
                        values: [
                            1, 20, 30,
                            1, 20, 30,
                            -1, -18, -17
                        ]

                    },
                    {
                        xValue: '2020.09',
                        values: [
                            0, 20, 250,
                            1, 15, 50,
                            0, -25, -100
                        ]
                    },
                    {
                        xValue: '2020.10',
                        values: [
                            0, 20, 250,
                            1, 15, 50,
                            0, -25, -100
                        ]
                    },
                    {
                        xValue: '2020.11',
                        values: [
                            1, 20, 250,
                            1, 15, 50,
                            0, -25, -100
                        ]
                    },
                    {
                        xValue: '2020.12',
                        values: [
                            0, 20, 250,
                            0, 15, 50,
                            -1, -25, -100
                        ]
                    },
                    {
                        xValue: '2021.01',
                        values: [
                            0, 20, 250,
                            0, 15, 50,
                            0, -25, -100
                        ]
                    }
                ],
            }} />
            {/* <DualAxesContainer data={{
                xValues: ['2020.08', '2020.09', '2020.10', '2020.11', '2020.12'],
                series: [
                    { text: "% ручных", values: [500, 800, 800, 800, 500], color: "gray" },
                    { text: "% автозаведенных", values: [1500, 1200, 1000, 300, 1000], color: "green" },
                ],
                lineValue: [2000, 2000, 1800, 1100, 1500]
            }} meta={{
                count: { alias: "Инцидентов" }
            }} /> */}
            {/* <BidirectionalBarContainer data={[
                { 'label': '2020.08', valuePositive: 2000 },
                { 'label': '2020.09', valuePositive: 2000 },
                { 'label': '2020.10', valuePositive: 2000 },
                { 'label': '2020.11', valuePositive: 1920, valueNegative: 1100 },
                { 'label': '2020.12', valuePositive: 2100, valueNegative: 1500 },
                { 'label': '2021.01', valuePositive: 1800, valueNegative: 1000 },
            ]} meta={{
                valuePositive: { alias: 'Открыто' },
                valueNegative: { alias: 'Закрыто' },
            }} /> */}
            {/* <TimeseriesContainer height={300} data={[
                { 'date': '2020.08', value: 2000 },
                { 'date': '2020.09', value: 2000 },
                { 'date': '2020.10', value: 2000 },
                { 'date': '2020.11', value: 1920 },
                { 'date': '2020.12', value: 2100 },
                { 'date': '2021.01', value: 1800 },
            ]} /> */}
        </Col>
        <Col xs={24} lg={6}>
            <GroupedColumn data={{
                series: [
                    { text: "новых", group: 'новых высоких' },
                    { text: "новых", group: 'новых средних' },
                    { text: "новых", group: 'новых низких' },
                    { text: "в работе", group: 'в работе высоких' },
                    { text: "в работе", group: 'в работе средних' },
                    { text: "в работе", group: 'в работе низких' },
                    { text: "закрыто", group: 'закрыто высоких' },
                    { text: "закрыто", group: 'закрыто средних' },
                    { text: "закрыто", group: 'закрыто низких' },
                ],
                data: [
                    {
                        xValue: '2020.08',
                        values: [
                            1, 20, 30,
                            1, 20, 30,
                            -1, -18, -17
                        ]

                    },
                    {
                        xValue: '2020.09',
                        values: [
                            0, 20, 250,
                            1, 15, 50,
                            0, -25, -100
                        ]
                    },
                    {
                        xValue: '2020.10',
                        values: [
                            0, 20, 250,
                            1, 15, 50,
                            0, -25, -100
                        ]
                    },
                    {
                        xValue: '2020.11',
                        values: [
                            1, 20, 250,
                            1, 15, 50,
                            0, -25, -100
                        ]
                    },
                    {
                        xValue: '2020.12',
                        values: [
                            0, 20, 250,
                            0, 15, 50,
                            -1, -25, -100
                        ]
                    },
                    {
                        xValue: '2021.01',
                        values: [
                            0, 20, 250,
                            0, 15, 50,
                            0, -25, -100
                        ]
                    }
                ],
            }} />
        </Col>

        <Col xs={24} lg={6}>
            <Title level={5}>Без влияния</Title>
            <div>
                <Minibar2Container height={100} data={[
                    {
                        label: 'low',
                        date: 'За неделю',
                        value: 300,
                    },
                    {
                        label: 'mid',
                        date: 'За неделю',
                        value: 100,
                    },
                    {
                        label: 'hig',
                        date: 'За неделю',
                        value: 50,
                    },
                    {
                        label: 'low',
                        date: 'За месяц',
                        value: 1500,
                    },
                    {
                        label: 'mid',
                        date: 'За месяц',
                        value: 603,
                    },
                    {
                        label: 'hig',
                        date: 'За месяц',
                        value: 120,
                    },
                ]} meta={{
                    hig: { alias: 'Высокие' },
                }} />
            </div>
            <Title level={5}>С влиянием</Title>
            <div>
                <Minibar2Container height={100} data={[
                    {
                        label: 'hig',
                        date: 'За неделю',
                        value: 1,
                    },
                    {
                        label: 'mid',
                        date: 'За месяц',
                        value: 15,
                    },
                    {
                        label: 'hig',
                        date: 'За месяц',
                        value: 5,
                    },
                ]} />
            </div>

            {/* {
                    label: 'Без влияния',
                    type: 'За неделю',
                    value: 1,
                },
                {
                    label: 'Без влияния',
                    type: 'За месяц',
                    value: 20,
                } */}
            {/* <StackedareaContainer height={300} slider={false} data={{
                xValues: ["2020.10", "2020.11", "2020.12", "2021.01"],
                series: [
                    { text: "Притер", values: [2000, 1920, 2100, 1800] }
                ]
            }} /> */}
        </Col>
    </Row>
    <Title level={3}>По услугам</Title>
    <Row gutter={[8, 8]} style={{ minHeight: '100px' }}>
        <Col xs={12} sm={8} xl={4} >
            <KPI1Info name="Услуга1" />
            {/* <Gauge1Container name={"Услуга1"} /> */}
        </Col>
        <Col xs={12} sm={8} xl={4} >
            <KPI1Info name="Услуга2" />
        </Col>
        <Col xs={12} sm={8} xl={4} >
            <KPI1Info name="Услуга3" />
        </Col>
        <Col xs={12} sm={8} xl={4} >
            <KPI1Info name="Услуга4" />
        </Col>
        <Col xs={12} sm={8} xl={4} >
            <KPI1Info name="Услуга5" />
        </Col>
        <Col xs={12} sm={8} xl={4}>
            <KPI1Info name="Остальные" />
        </Col>
    </Row>

    <Title level={3}>Объём заявок</Title>
    <Row>
        <Col xs={24} lg={24}>
            <Stackedarea2Container height={300} data={{
                xValues: ["2020.10", "2020.11", "2020.12", "2021.01"],
                series: [
                    { text: "Притер", values: [10, 8, 2, 8] },
                    { text: "Хабаровск", values: [8, 13, 20, 1] },
                    { text: "Кто-то 1", values: [1, 2, 3, 4] },
                    { text: "Кто-то 2", values: [4, 3, 2, 1] },
                ]
            }} />
        </Col>
    </Row>

    <Row gutter={[16, 16]}>
        <Col xs={12} md={6}>
            <RequestsInfo name="Притер" />
        </Col>
        <Col xs={12} md={6}>
            <RequestsInfo name="Хабаровск" />
        </Col>
        <Col xs={12} md={6}>
            <RequestsInfo name="Кто-то 1" />
        </Col>
        <Col xs={12} md={6}>
            <RequestsInfo name="Кто-то 2" />
        </Col>
    </Row>

    <Row gutter={18}>
        <Col xs={24} xl={12}>
            <IncidentTable data={[
                {
                    id: "IM0107139951",
                    state: "Назначен",
                    mskOpen: "2021.02.11 08:15",
                    assigment: "SberInfra УСХД Восток администрирование СХД/NAS",
                    level: "критично",
                    descr: `Нет доступа на ресурс подразделения
                        DVB_POST_7718_OOKIC_7718_295 (\\tambov4.ca.sbrf.ru\vol4)`,
                    affected: "Файловые ресурсы (NAS) (CI00363281)"
                }
            ]} />
        </Col>
        <Col xs={24} xl={12}>
            <ClosedIncidentTable data={[
                {
                    id: "IM0107139951",
                    assigment: "SberInfra Мониторинг ИТ-инфраструктуры на Zabbix (Прутских С.С.)",
                    affected: "Мониторинг ИТ инфраструктуры (Zabbix) (CI01810729)",
                    mskClosed: "2021-02-10 16:15",
                    level: "критично",
                    descr: `Отсутствует физ доступ с прокси сервера .pvli-zabbx0028 (testdi) до сервера cannot connect to [[10.115.24.1]:10051`
                }
            ]} />
        </Col>
    </Row>
    {/* <Title level={2}>Статистика за квартал</Title>
    <Row>
        <Col xs={24} lg={12}>
            <GaugeContainer id="Z95" name="Максимальное вермя в ч. выполнения 95% заявок" series={[
                {
                    values: [10],
                }
            ]} />
        </Col>
        <Col xs={24} lg={12}>
            <GaugeContainer id="Inc95" name="Максимальное вермя в ч. выполнения 95% инцидентов" series={[
                {
                    values: [8],
                }
            ]} />
        </Col>
    </Row> */}
</>);
