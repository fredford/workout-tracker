import http from "../http-common";

class StatsService {
  getDashboardDataBasic() {
    return http.get(`/stats/dashboardData`);
  }
  getExerciseData(id) {
    return http.get(`/stats/exerciseData/${id}`);
  }
}

export default new StatsService();
