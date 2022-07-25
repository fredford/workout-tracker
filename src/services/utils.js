import axios from "axios";

export const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
  baseURL: process.env.REACT_APP_BASE_URL,
};

export const resolve = async (promise) => {
  try {
    const result = await promise;
    return [result.data.data, null];
  } catch (error) {
    if (error.response.status === 401) {
      console.log("there");
    }
    console.log(error);

    return [null, error];
  }
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
