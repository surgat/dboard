import Table from "antd/lib/table";
import React, { FunctionComponent } from "react";

const columns = [
  {
    title: 'Роль',
    dataIndex: 'role',
    key: 'role',
    render: text => <a>{text}</a>,
  },
  {
    title: 'В проме',
    dataIndex: 'prom',
    key: 'prom',
  },
  {
    title: 'ЗИП',
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
      <h2>Устройств</h2>
      <Table rowKey="role" columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}
