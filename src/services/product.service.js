import { createApiClient } from "./api.service";

class ProductServices {
    constructor(baseUrl = "/api/products") {
        this.api = createApiClient(baseUrl, true);
    };
    // get all product
    async getAll() {
        return (await this.api.get("/")).data;
    };
    // create a new product
    async create(data) {
        return (await this.api.post("/", data)).data;
    };
    // get a single product with id
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    };
    // update product with id
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    };
    // delete product with id
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    };
    // delete all product
    async deleteAll() {
        return (await this.api.delete("/")).data;
    };
};

export default new ProductServices();