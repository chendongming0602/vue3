import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store/index";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/login.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to: any, from: any, next: any) => {
    if (!window.localStorage.getItem("token") && to.path !== "/login") {
        return next({ path: "/login" });
    }
    if (!store.state.permissionList) {
        store.dispatch("FETCH_PERMISSION").then(() => {
            next(to.path);
        });
    } else {
        next();
    }
});
router.afterEach((to: any, from: any, next: any) => {
    try {
        //设置标题
        if (to.meta.name) {
            document.title = to.meta.name;
        }
    } catch (err) {}
    let routerList = to.matched;
    //顶部面包屑
    store.commit("setCrumbList", routerList);
    //目前左边导航选中的active
    store.commit("SET_CURRENT_MENU", to.name);
});
/* 固定的路由 */
export const DynamicRoutes = [
    {
        path: "",
        component: () => import("@/components/nav/nav.vue"),
        name: "container",
        redirect: "home",
        meta: {
            requiresAuth: true,
            name: "首页",
        },
        children: [
            {
                path: "home",
                component: import("@/views/home/home.vue"),
                name: "home",
                meta: {
                    name: "首页",
                    icon: "icon-home",
                },
            },
            {
                path: "router",
                component: import("@/views/router/router.vue"),
                name: "router",
                meta: {
                    name: "路由管理",
                    icon: "el-icon-mobile",
                },
            },
            {
                path: "color",
                component: import("@/views/color/color.vue"),
                name: "color",
                meta: {
                    name: "主题管理",
                    icon: "el-icon-brush",
                },
            },
            {
                path: "language",
                component: import("@/views/language/language.vue"),
                name: "language",
                meta: {
                    name: "国际化",
                    icon: "el-icon-s-flag",
                },
            },
        ],
    },
];

export default router;
