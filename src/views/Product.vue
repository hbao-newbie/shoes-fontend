<template>
    <div class="container">
        <SearchProductVue class="input-search" v-model="searchText"/>
        <div class="d-flex flex-wrap justify-content-center">
            <ProductVue
                v-if="productCount > 0"
                :products="filteredProducts"
                v-model:activeIndex="activeIndex"
            />
        </div>
    </div>

</template>

<script>
import productService from "../services/product.service";
import SearchProductVue from "../components/SearchProduct.vue";
import ProductVue from "../components/Product.vue";
export default {
    components: {
        SearchProductVue,
        ProductVue,
    },
    data() {
        return {
            products: [],
            searchText: "",
        };
    },
    computed: {
        // Chuyển các đối tượng thành chuỗi để tìm kiếm
        productStrings() {
            return this.products.map((product) => {
                const { nameProduct, codeProduct } = product;
                return [ nameProduct, codeProduct ].join("");
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
        }
    },
    methods: {
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
    mounted() {
        this.refreshList();
    },

}
</script>

<style scoped>
.input-search {
    margin: 10px 0 10px;
}

.product-list {
    margin: 0 9% 0;
}
</style>