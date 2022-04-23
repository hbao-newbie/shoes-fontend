<template>
    <div v-if="product" class="container">
        <h1>Chỉnh sửa thông tin sản phẩm</h1>
        <FormProductVue
            :product="product"
            @submit:product="updateProduct"
            @delete:product="deleteProduct"
        />
    </div>
</template>

<script>
import FormProductVue from "../components/FormProduct.vue";
import productService from "../services/product.service";
export default {
    components: {
        FormProductVue,
    },
    props: {
        id: { type: String, required: true }
    },
    data() {
        return {
            product: null,
            message: "",
        }
    },
    methods: {
        async getProduct(id) {
            try {
                this.product = await productService.get(id);
            } catch (error) {
                console.log(error);
                // 
                this.$router.push({
                    name: "NotFound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateProduct(data) {
            try {
                await productService.update(this.product._id, data);
                this.message = "Liên hệ được cập nhật thành công.";
                this.$router.push({ name: "User" });
            } catch (error) {
                console.log(error);
            }
        },
        async deleteProduct() {
            if( confirm("Bạn có muốn xóa sản phẩm này?")) {
                try {
                    await productService.delete(this.product._id);
                    this.$router.push({ name: "User" })
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },
    created() {
        this.getProduct(this.id);
        this.message = "";
    },
}
</script>

<style scoped>
    h1{
        text-align: center;
    }
</style>