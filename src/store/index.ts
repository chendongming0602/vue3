import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default createStore({
    state: {
        permissionList: null /** 所有路由 */,
        sidebarMenu: [
        //   {
        //     name: "home",
        //     path: "home",
        //     meta: {
        //         icon: "icon-home",
        //         name: "首页",
        //     },
        // },
        // {
        //     name: "home",
        //     path: "login",
        //     meta: {
        //         icon: "icon-home",
        //         name: "登陆",
        //     },
        // },
        ] /** 导航菜单 */,
        currentMenu: "" /** 当前active导航菜单 */,
    },
    mutations,
    actions,
    getters,
});
