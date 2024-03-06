"use client";
import { Layout } from "antd";
import Header from "./Header";

interface IProps {
  children: React.ReactNode;
}
const { Content } = Layout;
const Contents: React.FC<IProps> = ({ children }) => {
  return (
    <Content style={{ minHeight: "100vh", color: "black" }}>
      <Header />
      <div style={{ padding: "10px" }}>{children}</div>
    </Content>
  );
};

export default Contents;
