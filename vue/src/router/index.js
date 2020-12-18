import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import("@/views/Home.vue")
  },
  {
    path:"/lgoin",
    name:"login",
    component:()=>import("@/views/login/login")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
