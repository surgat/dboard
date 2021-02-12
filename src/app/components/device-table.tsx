import { Header } from "antd/lib/layout/layout";
import Table from "antd/lib/table";
import Title from "antd/lib/typography/Title";
import React, { FunctionComponent } from "react";

const columns = [
  {
    title: 'Роль',
    dataIndex: 'role',
    key: 'role',
    render: text => <a>{text}</a>,
  },
  {
    title: 'ПРОМ',
    dataIndex: 'prom',
    key: 'prom',
  },
  {
    title: 'На складе',
    dataIndex: 'stock',
    key: 'stock',
  },
];

type Props = {
  data: any[]
};

export const DeviceTable: FunctionComponent<Props> = ({ data }) => {
  return (
    <div>
      <Title level={4}>Количество устройств</Title>
      <Table rowKey="role" columns={columns} dataSource={data} pagination={false} size="small" />
    </div>
  );
}
