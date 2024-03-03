import { setToLocalStorage } from "@/utils/local-storage";

interface IProps{
    accessToken:string;
}

export const storeUserInfo = ({accessToken}:IProps) =>{
    setToLocalStorage("accessToken",accessToken);
}