import axios from "axios";
import { notification } from "antd";

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

export const ApiFunc = axios.create({ baseURL: baseURL });

let token = localStorage.getItem("codeStoretoken");

ApiFunc.interceptors.request.use((req) => {
  if (token) {
    req.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return req;
});

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

// User Api
export const userRegister = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/codestore/signup`, body);
    openNotificationWithIcon("success", "Signup Successful", "");
    return data;
  } catch (error: any) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Signup Failed",
        error.response.data.message
      );
    }
  }
};

export const userLogin = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/codestore/signin`, body);
    openNotificationWithIcon("success", "Login Successful", "");
    return data;
  } catch (error: any) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Login Failed",
        error.response.data.message
      );
    }
  }
};
