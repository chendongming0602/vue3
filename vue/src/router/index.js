import { createRouter, createWebHashHistory } from 'vue-router';
import store from "@/store";
import {LEFTNAV} from "@/store/type";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import("@/views/Home.vue"),
    children:[
      {
        path:"/nav",
        name:"nav",
        component:()=>import("@/views/nav/left.vue")
      }
    ]
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/login/login")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to,from,next)=>{
  if(store.getters[LEFTNAV].length==0){
    store.dispatch(LEFTNAV).then(()=>{
      console.log("调用成功")
    })
  }
  next()
})

export default router
