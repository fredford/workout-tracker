import http from "../http-common";
import api from "./ApiHandler";

/**
 * Class to handle the requests with the server for Weight.
 */
class WeightService {
  getAll(successFunc = null, failureFunc = null) {
    return api.fetch(http.get(`/weight`), successFunc, failureFunc);
  }

  /**
   * API call to create a Set for a given Workout
   * @param data
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<*>}
   */
  createWeight(data, successFunc = null, failureFunc = null) {
    return api.create(http.post(`/weight`, data), successFunc, failureFunc);
  }

  /**
   * API call to delete a Set for a given Workout
   * @param id
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  removeWeight(id, successFunc = null, failureFunc = null) {
    return api.request(http.delete(`/weight?id=${id}`), successFunc, failureFunc);
  }
}

export default new WeightService();
