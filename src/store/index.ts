import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default createStore({
    state: {
        permissionList: null /** 所有路由 */,
        sidebarMenu: [] /** 导航菜单 */,
        currentMenu: "" /** 当前active导航菜单 */,
        /* 导航菜单是否折叠 */
        isSidebarNavCollapse: false,
        /* 面包屑导航列表 */
        crumbList: [],
    },
    mutations,
    actions,
    getters,
});
