import http from "../http-common";
import api from "./ApiHandler";

/**
 * Class to handle the requests with the server for Sets.
 */
class SetsService {
  /**
   * API call to create a Set for a given Workout
   * @param data
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<*>}
   */
  createSet(data, successFunc = null, failureFunc = null) {
    return api.create(http.post(`/sets/`, data), successFunc, failureFunc);
  }

  /**
   * API call to delete a Set for a given Workout
   * @param id
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  removeSet(id, successFunc = null, failureFunc = null) {
    return api.request(http.delete(`/sets/${id}`), successFunc, failureFunc);
  }
}

export default new SetsService();
