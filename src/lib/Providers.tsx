"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

interface IProps {
  children: React.ReactNode;
}
const Providers: React.FC<IProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
