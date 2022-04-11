import createHttp from "./http.service";

class AccountServices {
    constructor() {
        this.http = createHttp("/api/accounts")
    };
    // Create a new account
    async create(data) {
        return (await this.http.post("/", data)).data;
    };
    // Get a account with id
    async get(id) {
        return (await this.http.get(`/${id}`)).data;
    };
    // Update a account with id
    async update(id, data) {
        return (await this.http.put(`/${id}`, data)).data;
    };
    // Delete a account with id
    async delete(id) {
        return (await this.http.delete(`/${id}`)).data
    }
};

export default new AccountServices();