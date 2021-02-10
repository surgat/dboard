import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import { VOLSChartContainer } from '@app/components/vols/components/chart-container';
import { UtilizationScheduleChart } from '@app/components/utilizationSchedule/components/chart-container';
import { IncidentTable } from '../components/incident-table';


export const MonPage = () => (
    <Row style={{background: "#000"}}>
        <Col xs={24} lg={16}>
            <VOLSChartContainer />
        <UtilizationScheduleChart />
        </Col>
        <Col xs={24} lg={8}>
            <IncidentTable data={[
                {id: 1, level: "критично", descr: ""}
            ]} />
        </Col>
    </Row>
);
