<template>
    <div class="page">
        Oops, Page not found!!!, back to <router-link :to="{ name: 'HomePage' }">Home</router-link> 
    </div>
</template>

<style scoped>
    .page {
        max-width: 50%;
        margin: auto;
        font-size: 40px;
    }
</style>