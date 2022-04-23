<template>
    <div class="container">
        <h1>Thêm một sản phẩm mới</h1>
        <FormProductVue
            :product="product"
            @submit:product="addProduct"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import { swtoast } from "@/mixins/swal.mixin";
import FormProductVue from "../components/FormProduct.vue";
import productService from "../services/product.service";

export default {
    components: {
        FormProductVue,
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
                swtoast.success({
					text: "Thêm sản phẩm thành công.",
				});
            } catch (err) {
                console.log(err);
                swtoast.error({
					text: "Đã có lỗi xảy ra.",
				});
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
</style>