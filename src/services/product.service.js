import createHttp from "./http.service";

class ProductServices {
    constructor() {
        this.http = createHttp("/api/products");
    };
    // get all product
    async getAll() {
        return (await this.http.get("/")).data;
    };
    // create a new product
    async create(data) {
        return (await this.http.post("/", data)).data
    };
    // get a single product with id
    async get(id) {
        return (await this.http.get(`/${id}`)).data
    };
    // update product with id
    async update(id, data) {
        return (await this.http.put(`/${id}`, data)).data
    };
    // delete product with id
    async delete(id) {
        return (await this.http.delete(`/${id}`)).data
    };
    // delete all product
    async deleteAll() {
        return (await this.http.delete("/")).data
    };
};

export default new ProductServices();