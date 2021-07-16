
// 目前的所有路由
const dynamicRoutes = [
    {
        path: "/order",
        type: "order",
        component: () => import("@/views/admin/order.vue"),
        name: "order-manage",
        meta: {
            name: "订单管理",
            icon: "icon-email",
        },
        children: [
            {
                path: "list",
                name: "order-list",
                type: "orderList",
                component: () => import("@/views/admin/orderList.vue"),
                meta: {
                    name: "订单列表",
                    icon: "icon-quit",
                },
            },
            {
                path: "product",
                name: "product-manage",
                type: "production",
                component: () => import("@/views/admin/production.vue"),
                meta: {
                    name: "生产管理",
                    icon: "icon-service",
                },
                children: [
                    {
                        path: "list",
                        name: "product-list",
                        type: "productionList",
                        component: () =>
                            import("@/views/admin/productionList.vue"),
                        meta: {
                            name: "生产列表",
                            icon: "icon-nav",
                        },
                    },
                    {
                        path: "review",
                        name: "review-manage",
                        component: () => import("@/views/admin/order.vue"),
                        meta: {
                            name: "审核管理",
                            icon: "icon-finance-manage",
                        },
                    },
                ],
            },
            {
                path: "returnGoods",
                name: "return-goods",
                component: () => import("@/views/admin/order.vue"),
                meta: {
                    name: "退货管理",
                    icon: "icon-product-manage",
                },
            },
        ],
    },
    {
        path: "goods",
        component: () => import("@/views/admin/cproduct.vue"),
        name: "goods",
        type: "cproduct",
        meta: {
            name: "产品管理",

            icon: "icon-order-manage",
        },
        children: [
            {
                path: "list",
                name: "goods-list",
                type:"cproductList", 
                component: () => import("@/views/admin/cproductList.vue"),
                meta: {
                    name: "产品列表",
                    icon: "icon-home",
                },
            },
            {
                path: "classify",
                name: "goods-classify",
                component: () => import("@/views/admin/order.vue"),
                meta: {
                    name: "产品分类",
                    icon: "icon-product-manage",
                },
            },
        ],
    },
    {
        path: "list",
        name: "statistics-list",
        type:"statistics",
        component: () => import("@/views/admin/statistics.vue"),
        meta: {
            name: "统计列表",
            icon: "icon-home",
        },
    },
];
export default dynamicRoutes;
