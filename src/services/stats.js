import http from "../http-common";

class StatsService {
  getTopExercises(area, range) {
    return http.get(`/stats/topExercises?area=${area}&range=${range}`);
  }
  // range indicates the date range (ex. week, month, year, all-time)
  getDashboardActivity(range) {
    return http.get(`/stats/dashboardActivity?range=${range}`);
  }
  getDashboardDataBasic() {
    return http.get(`/stats/dashboardData`);
  }
  getExerciseData(id) {
    return http.get(`/stats/exerciseData/${id}`);
  }
}

export default new StatsService();
