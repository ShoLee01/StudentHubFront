import http from "./http-common"

class CourseService {
    getById(id) {
        return http.get(`/course/${id}`);
    }
    getAll() {
        return http.get("/course");
    }
    create(id, data) {
        return http.post(`/course?userId=${id}`, data);
    }
}

export default new CourseService();