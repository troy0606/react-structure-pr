import axios from "axios";

export const axiosBasicInstance = axios.create({
  baseURL: process.env.UAT_END_POINT,
  timeout:2000,
});
