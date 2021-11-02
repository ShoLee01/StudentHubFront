import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: "/sign_in",
        name: "/sign_in",
        component: () => import("../components/sign-in"),
    },
    {
        path: "/sign_up",
        name: "/sign_up",
        component: () => import("../components/sign-up"),
    }
    ,
    {
        path: "/tutors",
        name: "/tutors",
        component: () => import("../components/tutors"),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
