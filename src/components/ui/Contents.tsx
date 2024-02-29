"use client";
import { Layout } from "antd";

interface IProps {
  children: React.ReactNode;
}
const { Content } = Layout;
const Contents: React.FC<IProps> = ({ children }) => {
  return <Content style={{ minHeight: "100vh"  ,color:'black' }}>{children}</Content>;
};

export default Contents;
