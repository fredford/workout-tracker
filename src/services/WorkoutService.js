import http from "../http-common";
import api from "./ApiHandler";

/**
 * Class to handle the requests with the server for a Workout,
 * GET requests retrieve the Sets associated to the workout,
 * DELETE requests delete the Workout
 */
class WorkoutService {
  /**
   * API call to GET all the Sets for the workout id
   * @param id string - workout id
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<AxiosResponse<any>>}
   */
  getAll(id, successFunc = null, failureFunc = null) {
    return api.fetch(http.get(`/workout/${id}`), successFunc, failureFunc);
  }

  /**
   * API call to DELETE the workout provided
   * @param id
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  deleteById(id, successFunc = null, failureFunc = null) {
    return api.request(http.delete(`/workout/${id}`), successFunc, failureFunc);
  }
}

export default new WorkoutService();
