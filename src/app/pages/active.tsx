import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import ChartContainer from '@dboard/app/components/interfaces/chart-container';
import { PieContainer } from '@dboard/framework/react/zingcharts/pie-component';
import { DeviceTable } from '../components/device-table';
import { GaugeContainer } from '@dboard/framework/react/zingcharts/gauge-container';
import { Series } from '@dboard/framework/zingcharts';
import { TimeseriesContainer } from '@dboard/framework/react/zingcharts/timeseries-container';
import Title from 'antd/lib/typography/Title';
import { IncidentTable } from '@dboard/app/components/incident-table';
import { ClosedIncidentTable } from '@dboard/app/components/closed-incident-table';

export const ActivePage = () => (
    <>
        <Row gutter={18}>
            <Col xs={24} lg={12}>
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
            <Col xs={24} lg={12}>
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
        <Row>
            <Col xs={24} lg={24}>
                <TimeseriesContainer id="newChartLegacy" name="Заявки и инцеденты" series={[
                    {
                        text: "ЗНИ",
                        values: [10, 12, 15, 20]
                    },
                    {
                        text: "Инциденты",
                        values: [20, 18, 10, 1]
                    },
                    {
                        text: "ЗНР",
                        values: [6, 13, 18, 25]
                    },
                ] as Series[]} />
            </Col>
            {/* <Col xs={24} lg={6}>
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
            </Col> */}
        </Row>
        <Title level={2}>Статистика за квартал</Title>
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
        </Row>
    </>
);
