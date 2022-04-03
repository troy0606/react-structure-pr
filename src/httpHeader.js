import axios from "axios";

export const axiosBasicInstance = axios.create({
  baseURL: process.env.REACT_APP_UAT_END_POINT,
  timeout:2000,
});
