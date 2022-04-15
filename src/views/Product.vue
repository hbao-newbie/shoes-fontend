<template>
    <div class="container">
        <SearchProductVue class="input-search" />
        <div class="d-flex flex-wrap justify-content-center">
            <ProductVue
                :products="products"
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
            // activeIndex: -1,
            // searchText: "",
        };
    },
    // watch: {
    //     searchText() {
    //         this.activeIndex = -1;
    //     },
    // },
    computed: {
        // Chuyển các đối tượng thành chuỗi để tìm kiếm
        // productStrings() {
        //     return this.products.map((product) => {
        //         const { nameProduct, codeProduct } = product;
        //         return [ nameProduct, codeProduct ].join("");
        //     });
        // },
        // Trả về các đối tượng products cần tìm kiếm
        // filteredProduct() {
        //     if (!this.searchText) return this.products;
        //     return this.products.filter(
        //         (product, index) => this.productStrings[index].includes(this.searchText)
        //     );
        // },
        // activeProduct() {
        //     if (this.activeIndex < 0) return null;
        //     return this.filteredProduct[this.activeIndex];
        // },
        // productCount(){
        //     return this.filteredProduct.length;
        // }
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
            // this.activeIndex = -1;
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