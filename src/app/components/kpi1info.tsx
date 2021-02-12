import React, { useState, useEffect } from 'react';
import Divider from 'antd/lib/divider';
import { BulletContainer } from '@dboard/framework/react/zingcharts/bullet-container';
import { TinyColumnContainer } from '@dboard/framework/react/zingcharts/tinycolumn-container';
import Card from 'antd/lib/card';

type Props = {
    name: string
}

export const KPI1Info: React.FC<Props> = ({ name }) => {
    return (
        <Card size="small" title={name}>
            {/* <Space direction="vertical"> */}
            <BulletContainer />
            <Divider plain>динамика за год</Divider>
            <TinyColumnContainer />
            {/* </Space> */}
        </Card>
    )
}