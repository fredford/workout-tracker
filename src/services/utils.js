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

/**
 * Utility function to compare two input passwords
 * @param {string} password1 password for comparison
 * @param {string} password2 password to be compared
 * @returns boolean if they match or not
 */
export const passwordCompare = (password1, password2) => {
  return password1.length > 5 && password2.length > 5 && password1 === password2;

};

/**
 * Function to handle converting an input to a Number or Zero;
 * @param value string input by the User
 * @returns {number|number}
 */
export function convertToNumber(value) {
  return !isNaN(Number(value)) ? Number(value) : 0;
}
