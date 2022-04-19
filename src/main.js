import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
// import Bootstrap and Font Awesome
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import vueRouter
import router from "./router";

const vm = createApp(App).use(createPinia()).use(router).mount("#app");

export default vm;