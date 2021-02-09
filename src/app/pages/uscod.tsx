import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import ChartContainer from '@app/components/interfaces/chart-container';
import { PieContainer } from '@framework/react/zingcharts/pie-component';


export const UsCODPage = () => (
    <Row>
        <Col xs={24} lg={16}><ChartContainer /></Col>
        <Col xs={24} lg={8}><PieContainer id="Test" name="Speed" series={[
            {
                text: "10MB",
                values: [99]
            },
            {
                text: "100MB",
                values: [199]
            }
        ]} /></Col>
    </Row>
);
