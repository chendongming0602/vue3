import { createRouter, createWebHashHistory, RouteRecordRaw ,} from "vue-router";
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
            {
                path: "icon",
                component: import("@/views/icon/index.vue"),
                name: "icon",
                meta: {
                    name: "图标管理",
                    icon: "el-icon-picture-outline-round",
                },
                children:[
                    {
                        path: "elicon",
                        component: import("@/views/icon/el-icon.vue"),
                        name: "elicon",
                        meta: {
                            name: "Element图标",
                            icon: "el-icon-caret-bottom",
                        },
                    },
                    {
                        path: "aliicon",
                        component: import("@/views/icon/ali-icon.vue"),
                        name: "aliicon",
                        meta: {
                            name: "阿里图标",
                            icon: "el-icon-caret-top",
                        },
                    }
                ]
            },
            {
                path: "table",
                component: import("@/views/table/index.vue"),
                name: "table",
                meta: {
                    name: "表格管理",
                    icon: "el-icon-s-grid",
                },
                children:[
                    {
                        path: "basics",
                        component: import("@/views/table/basics.vue"),
                        name: "basics",
                        meta: {
                            name: "基础表格",
                            icon: "el-icon-menu",
                        },
                    },
                    {
                        path: "complex",
                        component: import("@/views/table/complex.vue"),
                        name: "complex",
                        meta: {
                            name: "复杂表格",
                            icon: "el-icon-s-grid",
                        },
                    }
                ]
            },
            {
                path: "chart",
                component: import("@/views/chart/index.vue"),
                name: "chart",
                meta: {
                    name: "图表示例",
                    icon: "el-icon-s-data",
                },
                children:[
                    {
                        path: "column",
                        component: import("@/views/chart/column.vue"),
                        name: "column",
                        meta: {
                            name: "柱形图表",
                            icon: "el-icon-s-data",
                        },
                    },
                    {
                        path: "line",
                        component: import("@/views/chart/line.vue"),
                        name: "line",
                        meta: {
                            name: "折线图表",
                            icon: "el-icon-minus",
                        },
                    },
                    {
                        path: "more",
                        component: import("@/views/chart/more.vue"),
                        name: "more",
                        meta: {
                            name: "其他图表",
                            icon: "el-icon-s-operation",
                        },
                    },
                ]
            },
        ],
    },
];

export default router;
