"use client";
import { store } from "@/redux/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";

interface IProps {
  children: React.ReactNode;
}
const Providers: React.FC<IProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  );
};

export default Providers;
