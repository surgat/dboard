import React from 'react';
import { Row, Col } from 'antd/lib/grid';
// import ChartContainer from '@dboard/app/components/interfaces/chart-container';
import { PieContainer } from '@dboard/framework/react/zingcharts/pie-component';
import { DeviceTable } from '../components/device-table';
import { GaugeContainer } from '@dboard/framework/react/zingcharts/gauge-container';
import { Series } from '@dboard/framework/zingcharts';
import { TimeseriesContainer } from '@dboard/framework/react/zingcharts/timeseries-container';
import Title from 'antd/lib/typography/Title';
import { IncidentTable } from '@dboard/app/components/incident-table';
import { ClosedIncidentTable } from '@dboard/app/components/closed-incident-table';
import Card from 'antd/lib/card';
import Statistic from 'antd/lib/statistic';
import { Gauge1Container } from '@dboard/framework/react/zingcharts/gauge1-container';
import { BulletContainer } from '@dboard/framework/react/zingcharts/bullet-container';
import { TinyLineContainer } from '@dboard/framework/react/zingcharts/tinyline-container';
import Space from 'antd/lib/space';
import Divider from 'antd/lib/divider';
import { KPI1Info } from '../components/kpi1info'
import { RequestsInfo } from '../components/requestsInfo'

import { Stackedarea2Container } from '@dboard/framework/react/zingcharts/stackedarea2-container';

export const ActivePage = () => (<>
    {/* <Title level={3}>KPI по услугам</Title> */}
    <Row gutter={[16, 16]} style={{ minHeight: '100px' }}>
        <Col xs={12} sm={8} lg={4} >
            <KPI1Info name="Услуга1" />
            {/* <Gauge1Container name={"Услуга1"} /> */}
        </Col>
        <Col xs={12} sm={8} lg={4} >
            <KPI1Info name="Услуга2" />
        </Col>
        <Col xs={12} sm={8} lg={4} >
            <KPI1Info name="Услуга3" />
        </Col>
        <Col xs={12} sm={8} lg={4} >
            <KPI1Info name="Услуга4" />
        </Col>
        <Col xs={12} sm={8} lg={4} >
            <KPI1Info name="Услуга5" />
        </Col>
        <Col xs={12} sm={8} lg={4}>
            <KPI1Info name="Услуга6" />
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
