<template>
    <div>
        <button
            class="btn btn-primary"
            @click="gotoAddProduct"
        >Thêm sản phẩm</button>
    </div>
</template>

<script>
export default {
    methods: {
        gotoAddProduct(){
            this.$router.push({ name: "AddProduct"});
        }
    },
}
</script>

<style scoped>
    div{
        margin-top: 100px;
        text-align: center;
    }
</style>