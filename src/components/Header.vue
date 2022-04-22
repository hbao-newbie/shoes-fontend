<template>
    <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
        <router-link 
          :to="{name: 'HomePage'}" class="py-2 "
        >
          <i class="fa-solid fa-house"></i>
          Home
        </router-link>
        <router-Link 
          class="py-2 d-md-inline-block" :to="{ name: 'Product' }"
        >
          <i class="fa-brands fa-product-hunt"></i>
          Sản phẩm
        </router-Link>
        <router-Link 
          class="py-2 d-md-inline-block" :to="{ name: 'Support' }"
        >
          <i class="fa-solid fa-circle-question"></i>
          Hỗ trợ
        </router-Link>
        <router-Link 
          v-if="!currentUser"
          class="py-2 d-md-inline-block" :to="{ name: 'Login' }"
        >
          <i class="fa-solid fa-user"></i>
          Đăng nhập
        </router-Link>
        <router-Link 
        v-if="currentUser"
          class="py-2 d-md-inline-block" :to="{ name: 'User' }"
        >
          <i class="fa-solid fa-user"></i>
          {{ currentUser.username }}
        </router-Link>
        <router-Link 
          v-if="!currentUser"
          class="py-2 d-md-inline-block " :to="{ name: 'Registration' }"
        >
          <i class="fa-solid fa-address-card"></i>
          Đăng ký
        </router-Link>
            <div
            class="py-2 d-md-inline-block logout"
            v-if="currentUser"
            @click.prevent="handleLogout"
            >
            <i class="fa-solid fa-right-from-bracket"></i>
            Đăng xuất
            </div>
        </div>
    </nav>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "../stores/auth.store";

export default {
  computed: {
    ...mapState(useAuthStore, {
      currentUser: "user",
    }),
  },
  methods: {
    ...mapActions(useAuthStore, ["logout","loadAuthState"]),

    handleLogout() {
      this.logout();
      this.$router.push({ name: "Login"});
    }
  },
  created() {
    this.loadAuthState();
  },
}

</script>

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

.logout {
  cursor: pointer;
  color: #999;
}

.logout:hover {
  color: #fff;
}

a{
    text-decoration: none;
}

</style>