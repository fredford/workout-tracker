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

export function isValidEmail(email) {
  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex_pattern.test(email);
}

// https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
export function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
