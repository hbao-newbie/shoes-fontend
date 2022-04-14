<template>
    <div class="container">
        <SearchProductVue class="input-search"/>
    </div>
</template>

<script>
import SearchProductVue from "../components/SearchProduct.vue"
export default {
    components: {
        SearchProductVue,
    }
}
</script>

<style>
.input-search {
    margin: 10px 0 10px;
}
</style>