import axios from "axios";

export const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
  baseURL: process.env.REACT_APP_BASE_URL,
};

export const getData = async (path) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
    baseURL: process.env.REACT_APP_BASE_URL,
  };

  try {
    const { data } = await axios.get(path, config);
    return data;
  } catch (error) {
    console.log(error);
    localStorage.removeItem("authToken");
    return { success: false, data: "You are not authorized, please login" };
  }
};

export const updateData = async (path, user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
    baseURL: process.env.REACT_APP_BASE_URL,
  };

  try {
    const { data } = await axios.put(path, user, config);
    return data;
  } catch (error) {
    console.log(error);
    localStorage.removeItem("authToken");
    return { success: false, data: "You are not authorized to edit profile" };
  }
};
