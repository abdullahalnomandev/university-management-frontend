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
      {children}
    </Content>
  );
};  

export default Contents;
