import React, { useState, useEffect } from 'react';
import Divider from 'antd/lib/divider';
import { BulletContainer } from '@dboard/framework/react/zingcharts/bullet-container';
import { TinyColumnContainer } from '@dboard/framework/react/zingcharts/tinycolumn-container';
import Card from 'antd/lib/card';
import Typography from 'antd/lib/typography';
import { ServiceIncideents } from './serviceIncideents'
import { ServiceIncideentsTime } from './serviceIncideentsTime'
import { Col, Row } from 'antd';


type Props = {
    name: string
}

export const KPI1Info: React.FC<Props> = ({ name }) => {
    return (
        <Card size="small" title={name}>
            <div style={{ textAlign: "center" }}>
                <Typography.Text>KPI</Typography.Text>
            </div>
            {/* <Divider plain>KPI</Divider> */}
            {/* <Space direction="vertical"> */}
            <BulletContainer />
            <div style={{ textAlign: "center" }}><Typography.Text>динамика за год</Typography.Text></div>
            {/* <Divider plain>динамика за год</Divider> */}
            <TinyColumnContainer />
            {/* </Space> */}
            <Divider plain>Инциденты</Divider>
            {/* <Typography.Text>Инциденты</Typography.Text> */}
            <Row gutter={[8, 8]}>
                <Col lg={12}>
                    <ServiceIncideents />
                </Col>
                <Col lg={12}>
                    <ServiceIncideentsTime />
                </Col>
            </Row>
        </Card>
    )
}