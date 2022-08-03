/**
 * Utility function to return the authentication token
 * @returns {string}
 */
export const getAuth = () => {
  return localStorage.getItem("authToken");
};

/**
 * Utility function to compare two input passwords
 * @param {string} password1 password for comparison
 * @param {string} password2 password to be compared
 * @returns boolean if they match or not
 */
export const passwordCompare = (password1, password2) => {
  return (
    password1.length > 5 && password2.length > 5 && password1 === password2
  );
};

/**
 * Function to handle converting an input to a Number or Zero;
 * @param value string input by the User
 * @returns {number|number}
 */
export function convertToNumber(value) {
  return !isNaN(Number(value)) ? Number(value) : 0;
}

export function isValidEmail(email) {
  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex_pattern.test(email);
}
