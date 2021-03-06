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
  // TODO return the exercise object instead of a list
  getById(id) {
    return http.get(`/exercises?id=${id}`);
  }

  createExercise(data) {
    return http.post("/exercises", data);
  }
  updateExercise(data) {
    return http.put("/exercises", data);
  }
  deleteExercise(id) {
    return http.delete(`/exercises?id=${id}`);
  }
}

export default new ExercisesService();
