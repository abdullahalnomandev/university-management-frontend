"use client";
import { Button, Table, TableProps } from "antd";
import React from "react";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
const UMTable = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: any, b: any) => a.age - b.age
    },

    {
      title: "Action",
      render: (data) => {
        return (
          <Button onClick={()=>console.log(data)} type="primary" danger>
            Delete
          </Button>
        );
      }
    }
  ];
  const tableData: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    }
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("page",page,'pageSizeChange',pageSize);
  };

  const paginationConfig = {
    pageSize: 5,
    total: 10,
    pageSizeOptions: [5, 10, 20],
    showSizeChanger: true,
    onChange: onPaginationChange
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;

    console.log("pagination changed", order, field);
  };

  return (
    <Table
      loading={false}
      columns={columns}
      dataSource={tableData}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
