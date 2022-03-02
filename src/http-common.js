import axios from "axios";

import { getAuth } from "./services/utils";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/v1`,
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = getAuth();

  if (token) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "authToken"
    )}`;
  }
  return config;
});

export default instance;
