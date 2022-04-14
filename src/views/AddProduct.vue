<template>
    <div class="container">
        <h1>Thêm một sản phẩm mới</h1>
        <FormAddProductVue
            :product="product"
            @submit:product="addProduct"
        />
        <p>{{ message }}</p>
    </div>
    <div class="container box"></div>
</template>

<script>
import FormAddProductVue from "../components/FormAddProduct.vue";
import productService from "../services/product.service";

export default {
    components: {
        FormAddProductVue,
    },
    data() {
        return {
            product: {
                name: "",
            },
            message: "",
        }
    },
    methods: {
        async addProduct(data) {
            try {
                await productService.create(this.product, data);
                this.message = "Thêm sản phẩm thành công!"
            } catch (err) {
                console.log(err);
            }
        }
    },
    created() {
        this.message = "";
    },
}
</script>

<style scoped>
h1 {
    margin: 20px 0px 20px;
    text-align: center;
}

.box {
    margin: 20px auto 20px;
    width: 100%;
    height: 2px;
    background-color: gray;
}
</style>