import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import ChartContainer from '@app/components/interfaces/chart-container';
import { PieContainer } from '@framework/react/zingcharts/pie-component';
import { DeviceTable } from '../components/device-table';


export const UsCODPage = () => (
    <Row>
        <Col xs={24} lg={16}><ChartContainer /></Col>
        <Col xs={24} lg={8}>
            <PieContainer id="SpeedPie" name="Speed" series={[
                {
                    text: "10MB",
                    values: [99]
                },
                {
                    text: "100MB",
                    values: [199]
                }
            ]} />
            <DeviceTable data={[
                { role: 'SS', prom: 32, stock: 32 },
                { role: 'AG', prom: 32, stock: 32 },
                { role: 'AC', prom: 32, stock: 32 },
            ]} />
        </Col>
    </Row>
);
