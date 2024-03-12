"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { Button, TableProps } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  const columns = [
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
      render: (data: any) => {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            Delete
          </Button>
        );
      }
    }
  ];

  const tableData = [
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

    const onTableChange = (pagination: any, filter: any, sorter: any) => {
      const { order, field } = sorter;

      console.log("pagination changed", order, field);
    };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`
          }
        ]}
      />
      <ActionBar title="Department List">
        <Link href="/super_admin/management/department/create">
          <Button type="primary">Create </Button>
        </Link>
      </ActionBar>
      <UMTable
        columns={columns}
        loading={false}
        dataSource={tableData}
        pageSize={5}
        totalPages={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default DepartmentPage;
