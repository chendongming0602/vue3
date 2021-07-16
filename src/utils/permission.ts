
// 模拟后端给的权限路由
//通过type值与本地所有路由进行对比
const permissionList=[
    {
        "name": "订单管理",
        type:"order",
        "children": [
            {
                "name": "订单列表",
                type:"orderList",
            },
            {
                "name": "生产管理",
                type:"production",
                "children": [
                    {
                        "name": "生产列表",
                        type:"productionList",
                    }
                ]
            }
        ]
    },
    {
        "name": "产品管理",
        type:"cproduct",
        "children": [
            {
                "name": "产品列表",
                type:"cproductList",
            }
        ]
    },
    {
        "name": "统计",
        type:"statistics",
       
    }
]
export default permissionList