const menu = [
    {
        "title": "首页",
        "path": "/management/homepage",
        "children":null,
        "icon":'home'
    },
    {
        "title": "客户信息",
        "path":"/management/customer",
        "children":null,
        "icon":'team'
    },
    {
        "title": "订单详情",
        "path":"/management/customer",
        "children":null,
        "icon":'team'
    },
    {
        "title": "车辆详情",
        "path":"/management/carinfo",
        "children":null,
        "icon":'security-scan'
    },
    {
        "title": "组件3",
        "order":"0-1",
        "children":[
            {
                "title":"12",
                "path":'/123',
                "index":"1-1"
            },
            {
                "title":"14",
                "path":'/12456',
                "index":"1-2"
            }
        ]
    },,
]
module.exports=menu