import http from "./http-common"

class UserService {
    getById(id) {
        return http.get(`/user/${id}`);
    }
    getAll() {
        return http.get("/user");
    }
    create(data) {
        return http.post("/user",data);
    }
    //auth(data) {
    //    return http.post("/user/authenticate", data);
    //  }
}

export default new UserService();