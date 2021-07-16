const mutations={
    //左边导航栏列表
    SET_MENU(state:any, menu:Array<any>) {
        state.sidebarMenu = menu
    },
    /* 完整的路由表 */
    SET_PERMISSION(state:any, routes:Array<any>) {
        state.permissionList = routes
    },
    //当前选中的导航
    SET_CURRENT_MENU(state:any, currentMenu:string) {
        state.currentMenu = currentMenu
    },
    //导航栏是否折叠
    toggleNavCollapse(state:any) {
        state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    },
    /* 面包屑导航列表 */
    setCrumbList(state:any, list:Array<any>) {
        state.crumbList = list
    }
}
export default mutations