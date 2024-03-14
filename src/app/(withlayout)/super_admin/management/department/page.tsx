"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button, Row, TableProps } from "antd";
import Link from "next/link";
import { useState } from "react";
import { GrView } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const DepartmentPage = () => {
  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  console.log(data);
  const departments = data?.departments;
  const meta = data?.meta;

  const columns = [
    {
      title: "Title",
      dataIndex: "title"
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      sorter: true
    },

    {
      title: "Action",
      render: (data: any) => {
        return (
          <Row>
            <Button onClick={() => console.log(data)} type="primary">
              <GrView />
            </Button>
            <Button onClick={() => console.log(data)} type="primary">
              <MdEdit />
            </Button>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <RiDeleteBin6Line />
            </Button>
          </Row>
        );
      }
    }
  ];

  // const tableData = [
  //   {
  //     key: "1",
  //     name: "Abdullah Al Noman",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"]
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"]
  //   }
  // ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("page", page, "pageSizeChange", pageSize);
    setSize(page);
    setPage(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;

    // console.log("pagination changed", order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
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
        loading={isLoading}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default DepartmentPage;
