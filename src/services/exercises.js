import http from "../http-common";

class ExercisesService {
  //  Get request for a list of exercises
  get(type = "all") {
    switch (type) {
      // Gets a list of user created exercises
      case "user":
        return http.get("/api/v1/exercises");
      // Gets a list of all exercises by the user or admin
      default:
        return http.get("/api/v1/exercises?type=all");
    }
  }

  // Gets a specific exercise
  getById(id) {
    return http.get(`/api/v1/exercises?id=${id}`);
  }
}

export default new ExercisesService();
