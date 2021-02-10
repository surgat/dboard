import Table from "antd/lib/table";
import React, { FunctionComponent } from "react";

const columns = [
  {
    title: 'Номер',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Критичность',
    dataIndex: 'level',
    key: 'level',
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

export const IncidentTable: FunctionComponent<Props> = ({ data }) => {
    return (
    <div>
      <p>Активные инциденты</p>
      <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
}
