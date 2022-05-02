import http from "../http-common";

class WorkoutService {
  getAll(id) {
    return http.get(`/workout/${id}`);
  }
}

export default new WorkoutService();
