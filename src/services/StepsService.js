import http from "../http-common";
import api from "./ApiHandler";

/**
 * Class to handle the requests with the server for Steps.
 */
class StepsService {
  getAll(successFunc = null, failureFunc = null) {
    return api.fetch(http.get(`/steps`), successFunc, failureFunc);
  }

  /**
   * API call to create steps for a given date
   * @param data
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<*>}
   */
  createSteps(data, successFunc = null, failureFunc = null) {
    return api.create(http.post(`/steps`, data), successFunc, failureFunc);
  }

  /**
   * API call to delete steps for a given date
   * @param id
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  removeSteps(id, successFunc = null, failureFunc = null) {
    return api.request(http.delete(`/steps?id=${id}`), successFunc, failureFunc);
  }
}

export default new StepsService();
