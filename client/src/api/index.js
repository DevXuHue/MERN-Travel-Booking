import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localhost:8800/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

clientAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

clientAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default clientAxios;
