import http from "../http-common";

class SetsService {
  getAll(id) {
    return http.get(`/sets/${id}`);
  }

  createSet(id, data) {
    return http.post(`/sets/${id}`);
  }
}

export default new SetsService();
