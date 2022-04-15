<template>
    <div
        v-for="product in products" :key="product.id"
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
                <button class="btn btn-primary">Thêm vào giỏ hàng</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
};
</script>