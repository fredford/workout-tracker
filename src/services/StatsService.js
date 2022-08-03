import http from "../http-common";
import api from "./ApiHandler";

/**
 * Class to handle the requests with the server for Stats
 */
class StatsService {
  /**
   * API call to get the Top Exercises for the User
   * @param area - body area specified by the User
   * @param range - date range specified by the User
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  getTopExercises(area, range, successFunc = null, failureFunc = null) {
    return api.fetch(http.get(`/stats/topExercises?area=${area}&range=${range}`), successFunc, failureFunc);
  }

  /**
   * API call to get the recent repetitions activity by the User
   * @param range - date range specified by the User
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  getDashboardActivity(range, successFunc = null, failureFunc = null) {
    return api.fetch(http.get(`/stats/dashboardActivity?range=${range}`), successFunc, failureFunc);
  }

  /**
   * API call for fetching basic statistics from the app
   * @param successFunc - function to execute on success
   * @param failureFunc - function to execute on failure
   * @returns {Promise<[*,null]|[null,any]>}
   */
  getDashboardDataBasic(successFunc = null, failureFunc = null ) {
    return api.fetch(http.get(`/stats/dashboardData`), successFunc, failureFunc);
  }

  /**
   * API call for fetching exercise specific statistics
   * @param id - exercise ID
   * @param successFunc - function to execute on success
   * @param failureFunc - function to execute on failure
   * @returns {Promise<[*,null]|[null,any]>}
   */
  getExerciseData(id, successFunc = null, failureFunc = null) {
    return api.fetch(http.get(`/stats/exerciseData/${id}`), successFunc, failureFunc);
  }
}

export default new StatsService();
