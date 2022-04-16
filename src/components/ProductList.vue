<template>
    <div class="dropdown container">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"
        >
            Giỏ hàng {{ countProductCart }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="dropdown-item"
                v-if="!countProductCart"
            >Giỏ hàng rỗng</div>
            <div class="dropdown-item"
                v-for="(cartItem, index) in cartList"
            >
                <div class="d-flex">
                    <div class="p-2">
                        <img :src="`/products/${cartItem.imgProduct}.jpg`" style="width: 7rem;">
                    </div>
                    <div class="p-2 flex-shrink-1">
                        <h5>{{ cartItem.nameProduct }}</h5>
                        <p>{{ cartItem.costProduct }}.000 VND</p>
                        <button class="btn btn-danger"
                            @click="removeItemCart(index)"
                        >Xóa</button>
                    </div>
                </div>
            </div>
            <div class="dropdown-item"
                v-if="countProductCart"
            >
                <p class="mr-1">Tổng hóa đơn: {{ cost }}.000 VND</p>
                <button class="btn btn-primary mr-1">Đặt hàng</button>
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
                <img :src="`/products/${product.imgProduct}.jpg`" style="width: 18rem;" class="card-img-top">
                <div class="card-body" style="height: 250px;">
                    <h5 class="card-title">{{ product.nameProduct }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Mã sản phẩm {{ product.codeProduct }}</li>
                    <li class="list-group-item">Giá {{ product.costProduct }}.000 VND</li>
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
        addProductToCart(index) {
            this.cartList.push(this.products[index]);
            this.cost += this.products[index].costProduct;
        },
        removeItemCart(index) {
            this.cost -= this.cartList[index].costProduct;
            this.cartList.splice(index, 1);
        },
        removeAllCart() {
            this.cost = 0;
            this.cartList = [];
        }
    },
};
</script>