import permissionList from "@/utils/login";
import dynamicRoutes from "@/router/dynamic-router";
import {recursionRouter,setDefaultRoute} from "@/utils/recursion-router";
import router, { DynamicRoutes } from '@/router/index';
const actions={
    async FETCH_PERMISSION({commit}:any){
        //处理需要动态的路由
        let routes :any= recursionRouter(permissionList, dynamicRoutes);
        //不需要动态的路由
        let MainContainer:any = DynamicRoutes.find(v => v.path === '');
        let children :any= MainContainer.children;
        //将两种路由结合生成左边的导航栏
        children.push(...routes);
        // console.log(children)
        commit('SET_MENU', children);
         /*
                为所有有children的菜单路由设置第一个children为默认路由
                主要是供面包屑用，防止点击面包屑后进入某个路由下的 '' 路由,比如/manage/
                而我们的路由是
                [
                    /manage/menu1,
                    /manage/menu2
                ]
            */
        setDefaultRoute([MainContainer]);
        /*  初始路由 */
        let initialRoutes = router.options.routes;
        console.log(DynamicRoutes)
        
        router.addRoute(DynamicRoutes[0]);
         /* 完整的路由表 */
         commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
    }
}
export default actions