import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store/index";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/login.vue"),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    if(!window.localStorage.getItem("token")&&to.path !== '/login'){
        return next({ path: '/login' })
    }
    if (!store.state.permissionList) {
      store.dispatch("FETCH_PERMISSION").then(() => {
          next(to.path)
        });
    } else {
        next();
    }
});
router.afterEach((to, from, next) => {
  let routerList = to.matched;
  //顶部面包屑
  store.commit('setCrumbList', routerList);
  //目前左边导航选中的active
  store.commit('SET_CURRENT_MENU', to.name);
})
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
        ],
    },
];

export default router;
