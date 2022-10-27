
import {createRouter, createWebHashHistory} from "vue-router";
// 1.创建路由规则
const routes = [
    {
        path: "/login",
        name: "login",
        component: ()=>import("../views/login/index.vue")
    },
    {
        path: "/register",
        name: "register",
        component: ()=>import("../views/register/index.vue")
    },
    {
        path: "/",
        name: "guide",
        component: ()=>import("../views/guide/index.vue")
    },
    {
        path: "/home",
        name: "layout",
        component: ()=>import("../views/layout/index.vue")
    },
    {
        path: "/home",
        name: "layout",
        component: () => import("../views/layout/index.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("../views/home/index.vue"),
            },
            {
                path: "/location",
                name: "location",
                component: () => import("../views/location/index.vue"),
            },
            {
                path: "/like",
                name: "like",
                component: () => import("../views/like/index.vue"),
            },
            {
                path: "/message",
                name: "message",
                component: () => import("../views/message/index.vue"),
            },
            {
                path: "/my",
                name: "my",
                component: () => import("../views/my/index.vue"),
            },
        ]
    }
]
// 2.创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
// 暴露router
export default router;
// 3.创建登录组件
// 4.指定出口

