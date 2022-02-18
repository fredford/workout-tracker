import http from "../http-common";

class ExercisesService {
  //  Get request for a list of exercises
  getAll() {
    return http.get("/exercises?type=all");
  }
  // Get only the User's exercises list
  getUser() {
    return http.get("/exercises");
  }
  // Gets a specific exercise
  getById(id) {
    return http.get(`/exercises?id=${id}`);
  }

  createExercise(data) {
    return http.post("/exercises", data);
  }
  updateExercise(data) {
    return http.put("/exercises", data);
  }
  deleteExercise(user, id) {
    return http.delete(`/exercises?user=${user}&id=${id}`);
  }
}

export default new ExercisesService();
