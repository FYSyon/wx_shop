var localIcon = [
    { icon_img: "/images/icon/one.png",icon_text: "目标统计"},
    { icon_img: "/images/icon/sign_in.png",icon_text: "积分签到"},
    { icon_img: "/images/icon/two.png",icon_text: "积分查询"},
    { icon_img: "/images/icon/night.png",icon_text: "夜间模式"}
]

var localOption = [
    {
        option_img: "/images/icon/edit.png",
        option_text: "我的自律规划",
        optionId: 0
    },
    {
        option_img: "/images/icon/order.png",
        option_text: "我的订单",
        optionId: 1

    },
    {
        option_img: "/images/icon/adress.png",
        option_text: "我的收货地址",
        optionId: 2

    },
    {
        option_img: "/images/icon/circle.png",
        option_text: "我加入的圈子",
        optionId: 3

    },
    {
        option_img: "/images/icon/fellback_1.png",
        option_text: "用户反馈",
        optionId: 4

    }
];
var localwristbandList = [
    { icon_img: "/images/hover/radio-ware.png",icon_text: "连接手环",iconId: 0},
    { icon_img: "/images/hover/bluetooth.png",icon_text: "蓝牙",iconId: 1},
    { icon_img: "/images/hover/clock.png",icon_text: "目标提醒",iconId: 2},
    { icon_img: "/images/hover/service.png",icon_text: "联系我们",iconId: 3},
]

var localMorebandList = [
    { icon_img: "/images/hover/video.png",icon_text: "视频"},
    { icon_img: "/images/hover/share.png",icon_text: "分享"}
]

var localOrderFormData = [
    {
        shop_name: 'wellsure旗舰店',
        order_number: '19122950254',
        status: '已完成',
        commodity_img: "/images/commodity/c2.jpg",
        commodity_detail: '摩洛哥护发精油修护坚果护发素干枯受痒永久防护',
        commodity_money: '58.00',
        commodity_title: '3瓶装；摩洛哥护发油',
        commodity_return: "7天无理由退货",
        commodity_darter: "不支持换货",
        order_money: "58.00"
    },
    {
        shop_name: '唯品会自营',
        order_number: '19122953695',
        status: '已完成',
        commodity_img: "/images/commodity/c1.jpg",
        commodity_detail: '极蜜【平价爆款眉笔】经典眉笔一字好看眉',
        commodity_money: '29.00',
        commodity_title: '灰色+浅棕色；均码',
        commodity_return: "7天退货",
        order_money: "29.00"
    },
    {
        shop_name: '唯品会自营',
        order_number: '19122953695',
        status: '未完成',
        commodity_img: "/images/commodity/c1.jpg",
        commodity_detail: '极蜜【平价爆款眉笔】经典眉笔一字好看眉',
        commodity_money: '29.00',
        commodity_title: '灰色+浅棕色；均码',
        commodity_return: "7天退货",
        order_money: "29.00"
    },


]



module.exports = {
    iconList: localIcon,
    optionList: localOption,
    wristbandList: localwristbandList,
    moreBandList: localMorebandList,
    orderFormData: localOrderFormData
}