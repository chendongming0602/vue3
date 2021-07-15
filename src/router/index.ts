import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: ()=> import ("@/views/login/login.vue")
  },
  {
    path: '/',
    name: 'nav',
    component: ()=> import ("@/components/nav/nav.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/* 准备动态添加的路由 */
export const DynamicRoutes = [
  {
      path: '',
      component: ()=> import ("@/components/nav/nav.vue"),
      name: 'container',
      redirect: 'home',
      meta: {
          requiresAuth: true,
          name: '首页'
      },
      children: [
          {
              path: 'home',
              component: import ("@/views/home/home.vue"),
              name: 'home',
              meta: {
                  name: '首页',
                  icon: 'icon-home'
              }
          }
      ]
  }
]

export default router
