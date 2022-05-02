import http from "../http-common";

class SetsService {
  createSet(data) {
    return http.post(`/sets/`, data);
  }
  removeSet(id) {
    return http.delete(`/sets/${id}`);
  }
}

export default new SetsService();
