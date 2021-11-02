import http from "./http-common"

class TutorsService {
    getById(id) {
        return http.get(`/tutor/${id}`);
    }
    getAll() {
        return http.get("/tutor");
    }
    create(id,coursesId, data) {
        return http.post(`/tutor?tutorId=${id}&coursesId=${coursesId}`, data);
    }
}

export default new TutorsService();