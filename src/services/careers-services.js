import http from "./http-common"

class CareersService {
    getById(id) {
        return http.get(`/career/${id}`);
    }
    getAll() {
        return http.get("/career");
    }
    create(id, data) {
        return http.post(`/career?careerId=${id}`, data);
    }
}

export default new CareersService();