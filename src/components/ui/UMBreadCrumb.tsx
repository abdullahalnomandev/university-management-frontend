import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

interface IProps {
  items: {
    label: string;
    link: string;
  }[];
}
const UMBreadCrumb: React.FC<IProps> = ({ items }) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      )
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        )
      };
    })
  ];
  return <Breadcrumb items={breadCrumbItems} />;
};

export default UMBreadCrumb;
