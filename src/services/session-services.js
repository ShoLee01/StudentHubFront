import http from "./http-common"

class SessionService {
    getById(id) {
        return http.get(`/session/${id}`);
    }
    getAll() {
        return http.get("/session");
    }
    create(id, data) {
        return http.post(`/session?sessionId=${id}`, data);
    }
}

export default new SessionService();