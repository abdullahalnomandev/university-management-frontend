import * as yup from "yup";

export const loginSchema = yup.object().shape({
    id: yup.string().required("UserId is required"),
    password: yup.string().required("Password is required"),
});
