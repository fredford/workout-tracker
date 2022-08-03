import http from "../http-common";
import api from "./ApiHandler"

/**
 * Class to handle the requests with the server for the User.
 */
class UserService {
  /**
   * API call to get the user information
   * @param successFunc - function to execute on success
   * @param failureFunc - function to execute on failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  getUser(successFunc, failureFunc) {
    return api.fetch(http.get("/profile"), successFunc, failureFunc);
  }

  /**
   * API call update the user information
   * @param user - User object containing data to be updated
   * @param successFunc - function to execute on success
   * @param failureFunc - function to execute on failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  updateUser(user, successFunc, failureFunc) {
    return api.request(http.put("/profile", user), successFunc, failureFunc);
  }

  /**
   * API call to delete the user
   * @param successFunc - function to execute on success
   * @param failureFunc - function to execute on failure
   * @returns {Promise<[*,null]|[null,*]>}
   */
  deleteUser(successFunc, failureFunc) {
    return api.request(http.delete("/profile"), successFunc, failureFunc);
  }
}

export default new UserService();
