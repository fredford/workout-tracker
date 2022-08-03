import http from "../http-common";
import api from "../services/sendRequest"

/**
 * Class to handle the requests with the server for Exercises.
 */
class ExercisesService {
  /**
   * API call to GET all exercises available to the User
   * @returns {Promise<[*,null]|[null,any]>}
   */
  getAll(successFunc = null, failureFunc = null) {
    return api.fetch(http.get("/exercises?type=all"), successFunc, failureFunc);
  }

  /**
   * API call to GET an exercise by ID
   * @param id string - exercise ID
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,any]>}
   */
  getById(id, successFunc = null, failureFunc = null) {
    return api.fetch(http.get(`/exercises?id=${id}`), successFunc, failureFunc);
  }

  /**
   * API call to POST a new exercise
   * @param data object - Object containing information about the Exercise
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<*>}
   */
  createExercise(data, successFunc = null, failureFunc = null) {
    return api.create(http.post("/exercises", data), successFunc, failureFunc);
  }

  /**
   * API call to DELETE an exercise
   * @param id string - exercise ID
   * @param successFunc function - Function to be executed upon success
   * @param failureFunc function - Function to be executed upon failure
   * @returns {Promise<[*,null]|[null,any]>}
   */
  deleteExercise(id, successFunc = null, failureFunc = null) {
    return api.request(http.delete(`/exercises?id=${id}`), successFunc, failureFunc);
  }
}

export default new ExercisesService();
