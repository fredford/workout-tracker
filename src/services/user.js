import http from "../http-common";

class UserService {
  getUser() {
    return http.get("/profile");
  }

  deleteUser() {
    return http.delete("/profile");
  }
}

export default new UserService();
