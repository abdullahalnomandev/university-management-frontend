"use client";
import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";

interface IProps {
  children: React.ReactNode;
}
const { Content } = Layout;
const Contents: React.FC<IProps> = ({ children }) => {
  const base = "admin";
  return (
    <Content style={{ minHeight: "100vh", color: "black" }}>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`
          },
          {
            label: `student`,
            link: `/${base}/student`
          }
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
