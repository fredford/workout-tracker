import http from "../http-common";

class ExerciseDataService {
  getAll(page = 0) {
    return http.get(`/exercises/?page=${page}`);
  }

  getPage(page = 0, exercisesPerPage = 10) {
    return http.get(
      `/exercises/?page=${page}&exercisesPerPage=${exercisesPerPage}`
    );
  }

  find(query, by = "name", page = 0) {
    return http.get(`/exercises/?${by}=${query}&page=${page}`);
  }

  createExercise(data) {
    return http.post("/exercises", data);
  }
  updateExercise(data) {
    return http.put("/exercises", data);
  }
  deleteExercise(user, id) {
    return http.delete(`/exercises/?user=${user}&id=${id}`);
  }
}

export default new ExerciseDataService();
