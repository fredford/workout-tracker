import http from "../http-common";

class WorkoutsService {
  getAll() {
    return http.get("/workouts");
  }
  getById(id) {
    return http.get(`/workouts?id=${id}`);
  }
  createWorkout(data) {
    return http.post("/workouts", data);
  }
}
export default new WorkoutsService();
