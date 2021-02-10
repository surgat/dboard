import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import ChartContainer from '@app/components/interfaces/chart-container';
import { PieContainer } from '@framework/react/zingcharts/pie-component';
import { DeviceTable } from '../components/device-table';
import { TimeseriesContainer } from '@framework/react/zingcharts/timeseries-container';
import { Series } from '@framework/zingcharts';


export const ActivePage = () => (
    <Row>
        <Col xs={24} lg={24}>
            <TimeseriesContainer id="newChartLegacy" name="Заявки и инцеденты" series={[
            {
                text: "ЗНИ"
            },
            {
                text: "ЗНР"
            },
            {
                text: "Инциденты"
            },
        ] as Series[]} />
        </Col>
    </Row>
);
