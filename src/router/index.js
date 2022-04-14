import { createRouter, createWebHistory} from 'vue-router';
import HomePage from "../views/HomePage.vue";

const routes = [
    // Home page
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    // Notfound Page
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    },
    // Product
    {
        path: "/product",
        name: "Product",
        component: () => import("../views/Product.vue"),
    },
    // Add product
    {
        path: "/addproduct",
        name: "AddProduct",
        component: () => import("../views/AddProduct.vue"),
    },   
    // Cart
    {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/Cart.vue"),
    },
    // Support
    {
        path: "/support",
        name: "Support",
        component: () => import("../views/Support.vue"),
    },
    // Login
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    // User
    {
        path: "/user",
        name: "User",
        component: () => import("../views/User.vue"),
    },
    // Registration
    {
        path: "/registration",
        name: "Registration",
        component: () => import("../views/Registration.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;