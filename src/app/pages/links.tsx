import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import { VOLSChartContainer } from '@dboard/app/components/vols/components/chart-container';
import { UtilizationScheduleChart } from '@dboard/app/components/utilizationSchedule/components/chart-container';
import { IncidentTable } from '../components/incident-table';
import { ClosedIncidentTable } from '../components/closed-incident-table';
import Title from 'antd/lib/typography/Title';
import Divider from 'antd/lib/divider';
import List from 'antd/lib/list';
import Typography from 'antd/lib/typography';


const dataExt = [
    { label: "HW", link: "http://10.35.202.106/hw/" },
    { label: "Grafana", link: "https://grafana-cssm.sigma.sbrf.ru/" },
    { label: "Splank", link: "http://10.24.17.16:8000/en-US/app/search/core_monitoring_dashboard" },
    { label: "Плановые работы", link: "https://sbtatlas.sigma.sbrf.ru/wiki/calendar/calendarPage.action?spaceKey=LVSD&calendarId=4851f31e-359c-4000-a5ca-1f6598b42bbf" }
];

const dataInt = [
    { label: "HW", link: "https://10.127.65.213/hw/" },
    { label: "Grafana", link: "https://grafana-cssm.ca.sbrf.ru/" },
    { label: "Splank", link: "http://10.64.251.166:8000/en-US/app/search/core_monitoring_dashboard" },
    { label: "IPAM", link: "http://ipam.ca.sbrf.ru/" },
];

export const LinksPage = () => (
    <Row gutter={18}>
        <Col xs={24} lg={12}>
            <Title level={2}>Альфа</Title>
            <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={dataInt}
                renderItem={item => (
                    <List.Item>
                        <a href={item.link} target="_blank">{item.label}</a>
                    </List.Item>
                )}
            />
        </Col>
        <Col xs={24} lg={12}>
            <Title level={2}>Сигма</Title>
            {/* <Divider orientation="left">Default Size</Divider> */}
            <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={dataExt}
                renderItem={item => (
                    <List.Item>
                        <a href={item.link} target="_blank">{item.label}</a>
                    </List.Item>
                )}
            />
        </Col>
    </Row>
);
