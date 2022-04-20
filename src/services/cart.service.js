import { createApiClient } from "./api.service";

class CartService {
    constructor(baseUrl = "/api/carts") {
        this.api = createApiClient(baseUrl, true);
    };

    // Get all carts
    async getAll() {
        return (await this.api.get("/")).data;
    }

    // Create a new cart
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    // Delete a carts from user
    async delete(id) {
        return (await this.api.delete(`/${id}`, data)).data;
    }
    // Delete all carts from user
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
};

export default new CartService();