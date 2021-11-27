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
        path: "/signin",
        name: "/signin",
        component: () => import("../components/signin"),
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
    ,
    {
        path: "/profile",
        name: "/profile",
        component: () => import("../components/profile"),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
