import http from "./http-common"

class ScheduleService {
    getById(id) {
        return http.get(`/schedule/${id}`);
    }
    getAll() {
        return http.get("/schedule");
    }
    create(id, data) {
        return http.post(`/schedule?scheduleId=${id}`, data);
    }
}

export default new ScheduleService();