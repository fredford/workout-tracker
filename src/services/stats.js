import http from "../http-common";

class StatsService {
  getExerciseData(id) {
    return http.get(`/stats/exerciseData/${id}`);
  }
}

export default new StatsService();
