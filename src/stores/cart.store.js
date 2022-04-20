import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state() {
        return {
            carts: null,
            cost: null,
        };
    },
    actions: {
        gotoCart(carts, cost) {
            this.carts = carts;
            this.cost = cost;
        }
    }
});