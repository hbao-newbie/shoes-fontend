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
        </div>

    </div>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth.store";
import ProductListVue from "../components/ProductList.vue";
import SearchProductVue from "../components/SearchProduct.vue";
import productService from "../services/product.service";

export default {
    components: {
    ProductListVue,
    SearchProductVue,
    },
    data() {
        return {
            products: [],
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
        refreshList() {
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
        text-align: justify;
    }

    .admin-function{
        margin-top: 10px;
    }

    h1 {
        text-align: center;
    }
</style>