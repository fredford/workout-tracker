import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/v1`,
  header: {
    "Content-Type": "application/json",
  },
});

/**
 * Class to handle User logins and registration.
 */
class AuthService {
  postLogin(email, password) {
    return instance.post("/login", { email, password });
  }
  postRegister(name, email, password) {
    return instance.post("/register", { name, email, password });
  }
  postForgot(email) {
    return instance.post("/forgotpassword", { email });
  }
  postReset(token, password) {
    return instance.put(`/resetpassword/${token}`, { password });
  }
}

export default new AuthService();
