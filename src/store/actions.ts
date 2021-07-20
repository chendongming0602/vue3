// 后端路由
import permissionList from "@/utils/permission";
//本地路由
import dynamicRoutes from "@/router/dynamic-router";
import { recursionRouter, setDefaultRoute } from "@/utils/recursion-router";
//固定路由
import router, { DynamicRoutes } from "@/router/index";
function typeOf(obj: any): any {
    const toString: any = Object.prototype.toString;
    const map: any = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object",
    };
    return map[toString.call(obj)];
}
function clone(data: any): any {
    const t = typeOf(data);
    let o: any;

    if (t === "array") {
        o = [];
    } else if (t === "object") {
        o = {};
    } else {
        return data;
    }

    if (t === "array") {
        for (let i = 0; i < data.length; i++) {
            o.push(clone(data[i]));
        }
    } else if (t === "object") {
        for (const i in data) {
            o[i] = clone(data[i]);
        }
    }
    return o;
}
const actions = {
    async FETCH_PERMISSION({ commit }: any) {
        //处理需要动态的路由
        let routes: any = recursionRouter(permissionList, dynamicRoutes);
        //不需要动态的路由（深拷贝）
        let MainContainer = clone(DynamicRoutes).find(
            (v: any) => v.path === ""
        );
        // let MainContainer:any = DynamicRoutes.find(v => v.path === '');
        let children: any = [];
        children = MainContainer.children;
        //将两种路由结合生成左边的导航栏
        children = children.concat(routes);
        commit("SET_MENU", children);
        MainContainer.children = children;
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
        // console.log(DynamicRoutes)
        // resetRouter()
        router.addRoute(MainContainer);
        // MainContainer.children=[]
        /* 完整的路由表 */
        // @ts-ignore //忽略提示
        commit("SET_PERMISSION", [...initialRoutes, ...DynamicRoutes]);
    },
};
export default actions;
