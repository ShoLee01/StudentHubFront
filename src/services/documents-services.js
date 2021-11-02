import http from "./http-common"

class DocumentService {
    getById(id) {
        return http.get(`/document/${id}`);
    }
    getAll() {
        return http.get("/document");
    }
    create(id, data) {
        return http.post(`/document?documentId=${id}`, data);
    }
}

export default new DocumentService();