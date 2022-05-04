import http from "../http-common";

class WorkoutService {
  getAll(id) {
    return http.get(`/workout/${id}`);
  }
  deleteById(id) {
    return http.delete(`/workout/${id}`);
  }
}

export default new WorkoutService();
