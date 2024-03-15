"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDeleteDepartmentMutation, useDepartmentsQuery } from "@/redux/api/departmentApi";
import { useDebounced } from "@/redux/hooks";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import dayjs from 'dayjs'

const DepartmentPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(2);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteDepartment] = useDeleteDepartmentMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  console.log(data);
  const departments = data?.departments;
  const meta = data?.meta;


  const deleteHandler = async (id: string) => {
    message.loading("Deleting...");
    try {
      const res = await deleteDepartment(id);
      if (res) {
        message.success("Department Deleted successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };


  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render:function(data:any){
        return data && dayjs(data).format('MMM D, YYYY hh:mm A')
      },
      sorter: true,
    },

    {
      title: "Action",
      render: (data: any) => {
        return (
          <div style={{ display: "flex", gap: 2 }}>
           <Link href={`/super_admin/management/department/edit/${data?.id}`}>
           <Button onClick={() => console.log(data)} type="primary">
              <MdEdit />
            </Button>
           </Link>
            <Button onClick={() =>deleteHandler(data?.id)} type="primary" danger>
              <RiDeleteBin6Line />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("page", page, "pageSizeChange", pageSize);
    setSize(pageSize);
    setPage(page);
  };

  const onTableChange = (sorter: any) => {
    const { order, field } = sorter;

    // console.log("pagination changed", order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
        ]}
      />
      <ActionBar title="Department List">
        <Input
          style={{ width: "20%" }}
          type="text"
          size="large"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          <Link href="/super_admin/management/department/create">
            <Button type="primary">Create </Button>
          </Link>

          {!!sortBy ||
            !!sortOrder ||
            (!!searchTerm && (
              <Button style={{ margin: "0 5px" }} type="primary">
                <ReloadOutlined onClick={resetFilters} />
              </Button>
            ))}
        </div>
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
