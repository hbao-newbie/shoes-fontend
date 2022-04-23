<template>
    <div>
        <ul 
            class="list-group mt-2"
            v-for="product in products" :key="product._id"
        >
            <li class="list-group-item list-group-item-custom">Tên sản phẩm {{ product.name }}</li>
            <li class="list-group-item">Mã {{ product.code}}</li>
            <li class="list-group-item">Giá {{ product.cost}} VND</li>
            <router-link 
                class="list-group-item"
                :to="{
                    name: 'EditProduct',
                    params: { id: product._id}
                }"
            >
            Edit
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        products: { type: Array, default: [] },
    },
}
</script>

<style scoped>
    .list-group-item-custom {
        background-color: rgba(0,0,0,.125);
    }
    
    a{
        color: blue;
    }

    a:hover{
        text-decoration: underline;
    }
</style>