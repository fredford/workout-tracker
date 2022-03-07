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

export const resolve = async (promise) => {
  try {
    const result = await promise;
    console.log(result.data);
    return [result.data.data, null];
  } catch (error) {
    console.log(error);
    return [null, error];
  }
};

export const retrieveData = async (service) => {
  service
    .get()
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getAuth = () => {
  return localStorage.getItem("authToken");
};

export const secondsToDuration = (time) => {
  let hours = Math.floor(time);
  let minutes = "";
  let seconds = "";

  console.log(time, hours, minutes, seconds);

  return { hours, minutes, seconds };
};
