import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "../views/login.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
    }, {
        path: "/",
        name: "LoginPage",
        component: LoginPage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;