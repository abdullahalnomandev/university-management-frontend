import { authKey } from "@/constants/storagekey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

interface IProps {
  accessToken: string;
}

export const storeUserInfo = ({ accessToken }: IProps) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return decodedToken(authToken);
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  return !!getFromLocalStorage(authKey);
};

export const removeUserInfo = (key:string) => {
  return localStorage.removeItem(key);
};
