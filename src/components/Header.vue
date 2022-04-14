<template>
<nav class="site-header sticky-top py-1">
  <div class="container d-flex flex-column flex-md-row justify-content-between">
    <router-link :to="{name: 'HomePage'}" class="py-2 ">
      <i class="fa-solid fa-house"></i>
      Home
    </router-link>
    <router-Link class="py-2 d-md-inline-block" :to="{ name: 'Product' }">
      Sản phẩm
    </router-Link>
    <router-Link class="py-2 d-md-inline-block" :to="{ name: 'Cart' }">
      Giỏ hàng
    </router-Link>
    <router-Link class="py-2 d-md-inline-block" :to="{ name: 'Support' }">
      Hỗ trợ
    </router-Link>
    <router-Link class="py-2 d-md-inline-block" :to="{ name: 'Login' }">
      <i class="fa-solid fa-user"></i>
      Đăng nhập
    </router-Link>
    <router-Link class="py-2 d-md-inline-block" :to="{ name: 'Registration' }">
      <i class="fa-solid fa-address-card"></i>
      Đăng ký
    </router-Link>
  </div>
</nav>
</template>

<style scoped>
.container {
  max-width: 960px;
}

/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

</style>