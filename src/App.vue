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

<style>
.swal2-popup {
	padding: 0 0 1rem 0;
    border: 1px solid gainsboro;
}

.swal2-close {
	padding: 0;
}

.swal2-popup.swal2-toast .swal2-title {
	margin: 1rem 1rem 1rem 1rem;
}

.swal2-popup.swal2-toast .swal2-html-container {
	margin: 10px;
}
</style>
