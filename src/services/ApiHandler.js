class MakeApi {
  constructor() {
    this.base_url = window.location.origin;
  }

  /**
   * Class method to handle generic API requests
   * @param {Promise} promise object handling asynchronous operation being performed
   * @param {Function} successFunc function to execute if request returns successfully
   * @param {Function} failFunc function to execute if the request returns unsuccessfully
   * @returns array containing the data and error obtained
   */
  request = async (promise, successFunc = null, failFunc = null) => {
    return await promise.then(
      (result) => {
        if (result.data.success) {
          if (successFunc) {
            successFunc();
          }
          return [result.data.data, null];
        }
      },
      (error) => {
        if (error.status === 401) {
          localStorage.removeItem("authToken");
          window.location.href(`${this.base_url}/startup`);
        } else if (failFunc) {
          failFunc();
        } else {
          console.log(error);
          return [null, error];
        }
      }
    );
  };

  /**
   * Class method to handle a fetch from the server for a given promise
   * @param {Promise} promise object handling asynchronous operation being performed
   * @param {Function} successFunc function to execute if request returns successfully
   * @param {Function} failFunc function to execute if the request returns unsuccessfully
   * @returns array containing the data and error obtained
   */
  fetch = async (promise, successFunc = null, failFunc = null) => {
    return await promise.then(
      (result) => {
        if (result.status === 200 && result.data.success) {
          if (successFunc) {
            successFunc(result.data.data);
          }
          return [result.data.data, null];
        }
      },
      (error) => {
        if (error.status === 401) {
          localStorage.removeItem("authToken");
          window.location.href(`${this.base_url}/startup`);
        } else if (failFunc) {
          failFunc();
        } else {
          console.log(error);
          return [null, error];
        }
      }
    );
  };

  /**
   * Class method to handle creating data for the server for a given promise
   * @param {Promise} promise object handling asynchronous operation being performed
   * @param {Function} successFunc function to execute if request returns successfully
   * @param {Function} failFunc function to execute if the request returns unsuccessfully
   * @returns array containing the data and error obtained
   */
  create = async (promise, successFunc = null, failFunc = null) => {
    const output = await promise.then(
      (result) => {
        if (result.status === 201 && result.data.success) {
          if (successFunc) {
            successFunc(result.data.data);
          }
          return [result.data.data, null];
        }
      },
      (error) => {
        if (error.status === 401) {
          localStorage.removeItem("authToken");
          window.location.href(`${this.base_url}/startup`);
        } else if (failFunc) {
          failFunc();
        } else {
          console.log(error);
          return [null, error];
        }
      }
    );

    return output;
  };

  update = async (promise) => {
    const output = await promise.then(
      (result) => {
        if (result.status === 200 && result.data.success) {
          return [result.data.data, null];
        }
      },
      (error) => {
        if (error.status === 401) {
          localStorage.removeItem("authToken");
          window.location.href(`${this.base_url}/startup`);
        } else {
          console.log(error);
          return [null, error];
        }
      }
    );

    return output;
  };

  remove = async (promise) => {
    const output = await promise.then(
      (result) => {
        if (result.status === 200 && result.data.success) {
          return [result.data.data, null];
        }
      },
      (error) => {
        if (error.status === 401) {
          localStorage.removeItem("authToken");
        } else {
          console.log(error);
          return [null, error];
        }
      }
    );

    return output;
  };
}

const api = new MakeApi();

export default api;
