import { createRouter, createWebHistory} from 'vue-router';
import HomePage from "../views/HomePage.vue";
// new
import Login from "../views/Login.vue"; 
import { useAuthStore } from '../stores/auth.store';

const redirectIfLoggedIn = (_to, _from) => {
    if(useAuthStore().isUserLoggedIn) {
        return {
            name: "User",
        };
    }
};

const routes = [
    // Home page
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
        meta: {
            publicPage: true,
        },
    },
    // Product
    {
        path: "/product",
        name: "Product",
        component: () => import("../views/Product.vue"),
        meta: {
            publicPage: true,
        },
    },
    // Support
    {
        path: "/support",
        name: "Support",
        component: () => import("../views/Support.vue"),
        meta: {
            publicPage: true,
        },
    },
    // Login
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            publicPage: true,
        },
        beforeEnter: redirectIfLoggedIn,
    },
    // Registration
    {
        path: "/registration",
        name: "Registration",
        component: () => import("../views/Registration.vue"),
        meta: {
            publicPage: true,
        },
        beforeEnter: redirectIfLoggedIn,
    },
    // Add product
    {
        path: "/addproduct",
        name: "AddProduct",
        component: () => import("../views/AddProduct.vue"),
    },
    // Edit product
    {
        path: "/editproduct/:id",
        name: "EditProduct",
        component: () => import("../views/EditProduct.vue"),
        props: true,
    },
    // User
    {
        path: "/user",
        name: "User",
        component: () => import("../views/User.vue"),
    },
    // Notfound Page
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
        meta: {
            publicPage: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, _from) => {
    const authRequired = !to.meta.publicPage;
    const auth = useAuthStore();

    if (authRequired && !auth.isUserLoggedIn) {
        const query = to.fullPath === "/" ? {} : { redirect: to.fullPath };
        return {
            name: "Login",
            query,
        };
    }
});

export default router;