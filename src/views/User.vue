<template>
    <div class="container container-custom">
        <h2 v-if="currentUser" class="user-custom bg-light"> {{ currentUser.username }} </h2>
        <div 
            v-if="currentUser"
            class="card card-custom" style="max-width: 18rem;"
        >
            <div class="card-header header-custom"> Thông tin người dùng</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: {{ currentUser.email }}</li>
            </ul>
        </div>
        <div v-if="currentUser">
            <div 
                class="admin-function mt-2"
                v-if="adminUser"
            >
                <h1> Danh sách các sản phẩm </h1>
                <SearchProductVue
                    class="mt-2"
                    v-model="searchText"
                />
                <ProductListVue
                    class="mt-2"
                    v-if="productCount > 0"
                    :products="filteredProducts"
                />
                <button
                    class="btn btn-primary mt-2"
                    @click="gotoAddProduct"
                >Thêm sản phẩm
                </button>
            </div>
            <div
                class="admin-function mt-2"
                v-if="!adminUser"
            >
                <h1> Danh sách các đơn hàng của bạn</h1>
                <div 
                    v-for="(cartItemList, index) in cartList"
                    :key="cartList.id"
                > 
                    <h3> Đơn hàng {{index + 1}}</h3>
                    <div
                        class="d-flex"
                        v-for="cart in cartItemList.cartItem" :key="cart.id"
                    >
                        <div class="p-2">
                            <img :src="`/products/${cart.image}.jpg`" style="width: 5rem;">
                        </div>
                        <div class="p-2 flex-shrink-1">
                            <h5>{{ cart.name }}</h5>
                            <p>Giá {{ cart.cost }} VND</p>
                        </div>
                    </div>
                    <p>Đại chỉ giao hàng: {{ cartItemList.cartAddress}} </p>
                    <p>Số điện thoại nhận hàng: {{ cartItemList.cartPhone }}</p>
                    <h5>Tổng đơn {{ cartItemList.cartCost }} VND</h5>
                    <p><i>Đang giao</i></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth.store";
import ProductListVue from "../components/ProductList.vue";
import SearchProductVue from "../components/SearchProduct.vue";
import productService from "../services/product.service";
import cartService from "../services/cart.service";

export default {
    components: {
    ProductListVue,
    SearchProductVue,
    },
    data() {
        return {
            products: [],
            cartList: [],
            searchText: "",
        }
    },
    computed: {
        ...mapState(useAuthStore,{
            currentUser: "user",
        }),
        productStrings() {
            return this.products.map((product) => {
                const { name, code } = product;
                return [ name, code ].join("");
            });
        },
        // Trả về các đối tượng products cần tìm kiếm
        filteredProducts() {
            if (!this.searchText) return this.products;
            return this.products.filter(
                (product, index) => this.productStrings[index].includes(this.searchText)
            );
        },
        productCount(){
            return this.filteredProducts.length;
        },
        adminUser() {
            if(this.currentUser.username === "admin") return true;
            return false;
        }
    },
    methods: {
        gotoAddProduct(){
            this.$router.push({ name: "AddProduct"});
        },
        async retriveProduct(){
            try {
                this.products = await productService.getAll();
            } catch(err) {
                console.log(err);
            }   
        },
        async retriveCart() {
            try {
                this.cartList = await cartService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retriveCart()
            this.retriveProduct();
        }
    },
    created() {
        if (!this.currentUser) {
            this.$router.push({ name: "Login"});
        }
    },
    mounted() {
        this.refreshList()
    },
}
</script>

<style scoped>
    div{
        margin-top: 100px;
        text-align: center;
    }

    .header-custom {
        margin-top: 0;
    }

    .card-custom {
        margin-top: 10px;
    }

    .user-custom {
        padding: 0;
        font-size: 40px;
        height: 50px;
        text-align: center;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 3px;
    }

    .container-custom {
        margin-top: 10px;
    }

    div[data-v-e0b47cf6] {
        margin-top: 0px;
        text-align: justify;
    }

    .admin-function{
        margin-top: 10px;
    }

    h1 {
        text-align: center;
    }

    h3 {
        padding-bottom: 5px;
        border-bottom: 1px solid navajowhite;
    }
</style>