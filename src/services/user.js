import http from "../http-common";

class UserService {
  getUser() {
    return http.get("/profile");
  }
}

export default new UserService();
