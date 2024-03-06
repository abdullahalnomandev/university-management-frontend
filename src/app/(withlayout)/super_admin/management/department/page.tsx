"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`
          }
        ]}
      />
      <h1> Department List</h1>
        <Link href="/super_admin/management/department/create">
          <Button type="primary">Create </Button>
        </Link>
    </div>
  );
};

export default DepartmentPage;
