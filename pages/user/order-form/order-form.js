var data = require("../../../data/user-data.js");
Page({
    data: {
        tabListData:[],
        winHeight: "", //窗口高度
        currentTab: 0,  //预设当前项的值
        scrollLeft: 0,  //tab标题的滚动条位置
        inputShowed: false,
        inputVal: ""
    },
    onLoad: function (options) {
        var that = this;
        var title = options.title;
        wx.setNavigationBarTitle({
          title: title,
        })
        this.setData({
            tabListData:[
                { index: 0,tab_title: "全部" },
                { index: 1,tab_title: "待付款" },
                { index: 1,tab_title: "待发货" },
                { index: 2,tab_title: "待收货" },
                { index: 3,tab_title: "已完成" },
                { index: 5,tab_title: "评价"}
            ],
            orderData: data.orderFormData,
            search: this.search.bind(this),
        })
        // 高度自适应
        wx.getSystemInfo({
            success: function(res){
                var clientHeight = res.windowHeight,
                    clientWidth = res.windowWidth,
                    rpxR = 750/clientWidth;
                var calc = clientHeight*rpxR-180;
                console.log(calc);
                that.setData({
                    winHeight: calc
                })
            }
        })
    },
    //滚动切换标签样式
    switchTap: function(event){
        this.setData({
            currentTab: event.detail.current
        })
        this.checkCor();
    },
    //点击标题切换当前项时改变样式
    switchNav: function(event){
        var cur = event.target.dataset.current;
        if (this.data.currentTab == cur) return false;
        else {
            this.setData({
                currentTab: cur
            })
        }
        // wx.makePhoneCall({
        //   phoneNumber: '15766690229',
        // })
    },
    //判断当前滚动条超过一屏时，设置tab标题滚动条
    checkCor: function(){
        if (this.data.currentTab>5){
            this.setData({
                scrollLeft: 300
            })
        }else {
            this.setData({
                scrollLeft: 0
            })
        }
    },
    search: function (value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
            }, 200)
        })
    },
    selectResult: function (e) {
        console.log('select result', e.detail)
    },

})