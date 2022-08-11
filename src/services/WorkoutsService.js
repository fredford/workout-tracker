import http from "../http-common";
import api from "./ApiHandler";

/**
 * Class to handle the requests with the server for Workouts.
 */
class WorkoutsService {
  /**
   * API call to get the latest Workout by the User
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  getLast(successFunc = null, failureFunc = null) {
    return api.fetch(http.get("/lastworkout"), successFunc, failureFunc);
  }

  /**
   * API call to get all Workouts by the User
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  getAll(successFunc = null, failureFunc = null) {
    return api.fetch(http.get("/workouts"), successFunc, failureFunc);
  }

  /**
   * API call to get a Workout by ID
   * @param id
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  getById(id, successFunc = null, failureFunc = null) {
    return api.fetch(http.get(`/workout?id=${id}`), successFunc, failureFunc);
  }

  /**
   * API call to create a Workout
   * @param data object - Information to create a workout
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<*>}
   */
  createWorkout(data, successFunc = null, failureFunc = null) {
    return api.create(http.post("/workouts", data), successFunc, failureFunc);
  }
}
export default new WorkoutsService();
