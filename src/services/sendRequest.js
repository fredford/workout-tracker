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
        if (result.status === 200) {
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

  update = async (promise) => {};

  remove = async (promise) => {};

  resolve = async (promise) => {
    try {
      const result = await promise;
      return [result.data.data, null];
    } catch (error) {
      if (error.response.status === 401) {
        window.location.href(`${this.base_url}/startup`);
        localStorage.removeItem("authToken");
        return [null, error];
      }
      return [null, error];
    }
  };

  sendRequest = async (service, params = []) => {
    service(...params)
      .then((response) => {
        console.log(response);
        return { json: response.data.data, status: response.status };
      })
      .then(({ json, status }) => {
        console.log(json, status);
        if (status === 200 || status === 201) {
          console.log(json);
          return { loading: false, data: json, error: null };
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          return { loading: false, data: null, error: "exit" };
        } else if (error.response.status !== 404) {
          return { loading: false, data: null, error: null };
        }
      });
  };
}

const api = new MakeApi();

export default api;
