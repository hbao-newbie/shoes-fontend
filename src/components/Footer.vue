<template>
    <div class="raw"></div>
    <footer class="container py-5">
    <div class="row">
        <div class="col-6 col-md">
            <h5>Sản phẩm</h5>
            <ul class="list-unstyled text-small">
                <li><router-Link class="text-muted" :to="{ name: 'Product' }">Giày nam</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Product' }">Giày nữ</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Product' }">Thời trang và phụ kiện</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Product' }">Safe-off</router-Link></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>Thông tin và liên hệ</h5>
            <ul class="list-unstyled text-small">
                <li><router-Link class="text-muted" :to="{ name: 'Support' }">Tuyển Dụng</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Support' }">Liên Hệ Chuyển Nhượng</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Support' }">Về Shoes</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Support' }">FAQs</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Support' }">Bảo mật thông tin</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Support' }">Chính sách chung</router-Link></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>Hỗ trợ</h5>
            <ul class="list-unstyled text-small">
                <li><router-Link class="text-muted" :to="{ name: 'Support' }">FAQs</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Support' }">Bảo mật thông tin</router-Link></li>
                <li><router-Link class="text-muted" :to="{ name: 'Support' }">Chính sách chung</router-Link></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>Mạng xã hội</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="https://vi-vn.facebook.com/">Facebook <i class="fa-brands fa-facebook"></i></a></li>
                <li><a class="text-muted" href="https://www.instagram.com/">Instagram <i class="fa-brands fa-instagram"></i></a></li>
                <li><a class="text-muted" href="https://tiktok.com/">Tiktok <i class="fa-brands fa-tiktok"></i></a></li>
            </ul>
        </div>
    </div>
    </footer>
</template>

<style scoped>
.raw {
    margin-top: 10px;
    height: 1px;
    background-color: cadetblue;
}
</style>