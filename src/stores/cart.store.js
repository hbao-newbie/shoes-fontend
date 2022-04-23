import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state() {
        return {
            carts: null,
            cost: null,
        };
    },
    actions: {
        gotoCart(carts) {
            return this.carts = carts;
        },
        gotoCost(cost) {
            return this.cost = cost;
        }
    }
});