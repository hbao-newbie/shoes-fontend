<script>
    import HeaderVue from "./components/Header.vue"
    import FooterVue from "./components/Footer.vue"
    export default {
        components: {
            HeaderVue,
            FooterVue,
        }
    }
</script>

<template>
    <HeaderVue class="header"/>
    <router-view></router-view>
    <FooterVue/>
</template>
