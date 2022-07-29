import http from "../http-common";

class UserService {
  getUser() {
    return http.get("/profile");
  }

  updateUser(user) {
    return http.put("/profile", user);
  }

  deleteUser() {
    return http.delete("/profile");
  }
}

export default new UserService();
