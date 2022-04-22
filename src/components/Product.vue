<template>
    <div class="dropdown container">
        <button class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
        >
            <i class="fa-solid fa-cart-shopping"></i>
            Giỏ hàng {{ countProductCart }}
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-body"
                v-if="!countProductCart"
            >Giỏ hàng rỗng</div>
            <div class="offcanvas-body">
                <div 
                    v-for="(cartItem, index) in cartList"
                >
                    <div class="d-flex">
                        <div class="p-2">
                            <img :src="`/products/${cartItem.image}.jpg`" style="width: 9rem;">
                        </div>
                        <div class="p-2 flex-shrink-1">
                            <h5>{{ cartItem.name }}</h5>
                            <p>{{ cartItem.cost }}</p>
                            <button class="btn btn-danger"
                                @click="removeItemCart(index)"
                            >Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bottom-cart"
                v-if="countProductCart"
            >
                <p class="mr-1">Tổng hóa đơn: {{ cost }}</p>
                <button class="btn btn-primary margin"
                    @click="handleGoToCart"
                >Đặt hàng</button>
                <button class="btn btn-danger"
                    @click="removeAllCart"
                >Xóa</button>
            </div>
        </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center container">
        <div
            v-for="(product, index) in products"
            :key="product.id"
            class="p-2" style="width: 19rem;"
        >
            <div class="card">
                <img :src="`/products/${product.image}.jpg`" style="width: 18rem;" class="card-img-top">
                <div class="card-body" style="height: 200px;">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Mã sản phẩm {{ product.code }}</li>
                    <li class="list-group-item">Giá {{ product.cost }} VND</li>
                </ul>
                <div class="card-body">
                    <button class="btn btn-primary"
                        @click="addProductToCart(index)"
                    >Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCartStore } from "../stores/cart.store";

export default {
    props: {
        products: { type: Array, default: [] },
    },
    data() {
        return {
            cartList: [],
            cost: 0,
        }
    },
    computed: {
        countProductCart() {
            return this.cartList.length;
        },
    },
    methods: {
        ...mapActions(useCartStore, ["gotoCart"]),
        addProductToCart(index) {
            this.cartList.push(this.products[index]);
            this.cost += Number.parseInt(this.products[index].cost);
        },
        removeItemCart(index) {
            this.cost -= Number.parseInt(this.products[index].cost);
            this.cartList.splice(index, 1);
        },
        removeAllCart() {
            this.cost = 0;
            this.cartList = [];
        },
        handleGoToCart() {
            this.gotoCart(this.cartList, this.cost);
            this.$router.push({ name: "Carts" });
        }
    },
};
</script>

<style scoped>
    .dropdown-menu-custom{
        margin-top: 10px;
    }
    .bottom-cart{
        padding: 20px;
    }
    .margin{
        margin-right: 10px;
    }
</style>