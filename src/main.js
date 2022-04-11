import { createApp } from "vue";
import App from "./App.vue";
// import Bootstrap and Font Awesome
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import vueRouter
import router from "./router";

createApp(App).use(router).mount('#app');
