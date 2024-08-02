import { authKey } from "@/constants/storagekey";
import { getNewAccessToken } from "@/services/auth.service";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// @ts-ignore
instance.interceptors.response.use(function (response) {

  const responseObject: ResponseSuccessType = {
    data: response?.data?.data,
    meta: response?.data?.meta
  };
  return responseObject;
},

  async function (error) {

     const config = error.config;

    if (error?.response?.status === 403 && !config?.sent) {
       config.sent = true;

       const response = await getNewAccessToken()
       const accessToken = response.data.accessToken
       config.headers.Authorization = accessToken;
       setToLocalStorage(authKey,accessToken)
      return instance(config);
      //  console.log("accessToken",accessToken)
    }
    else {
      const responseErrorObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.message
      };
      return responseErrorObject;
    }
    // return Promise.reject(error);
  }
);
export { instance };
