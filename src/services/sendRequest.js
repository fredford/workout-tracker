class MakeApi {
  constructor() {
    this.loading = false;
    this.data = null;
    this.error = null;

    this.base_url = window.location.origin;
  }

  fetch = async (promise) => {
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

  send = async (promise) => {};

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

  remove = async (promise) => {};
}

const api = new MakeApi();

export default api;
