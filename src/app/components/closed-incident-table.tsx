import Table from "antd/lib/table";
import Title from "antd/lib/typography/Title";
import React, { FunctionComponent } from "react";

const columns = [
  {
    title: 'Номер',
    dataIndex: 'id',
    key: 'id',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Критичность',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: 'Назначено',
    dataIndex: 'assigment',
    key: 'assigment',
  },
  {
    title: 'Влияние',
    dataIndex: 'affected',
    key: 'affected',
  },
  {
    title: 'Описание',
    dataIndex: 'descr',
    key: 'descr',
  },
];

type Props = {
  data: any[]
};

export const ClosedIncidentTable: FunctionComponent<Props> = ({ data }) => {
  return (
    <div>
      <Title level={4}>Недавно закрытые инциденты</Title>
      <Table rowKey="id" columns={columns} dataSource={data} pagination={false} size="small" />
    </div>
  );
}
