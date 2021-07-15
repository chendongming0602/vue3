const mutations={
    SET_MENU(state:any, menu:Array<any>) {
        state.sidebarMenu = menu
    },
    SET_PERMISSION(state:any, routes:Array<any>) {
        state.permissionList = routes
    },
}
export default mutations