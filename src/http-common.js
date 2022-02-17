import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
});
