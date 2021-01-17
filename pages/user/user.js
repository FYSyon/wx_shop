var Data = require("../../data/user-data.js");
Page({
    data: {
        height: 0,
        wristBandList: {},
        isMore: true,
        isBlock: false,
        isListBlock: false,
        touchS: [0, 0],
        touchE: [0, 0],
        time: ['23:00', "07:00", "00:00", "00:00"],
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        tipBlock: false,
    },
    onLoad: function (options) {
        var height = wx.getSystemInfoSync().windowHeight;
        this.setData({
            height: height,
            iconList: Data.iconList,
            optionList: Data.optionList,
            wristBandList: Data.wristbandList,
            moreBandList: Data.moreBandList
        })

    },
    getUserInfo: function (event) {
        var that = this;
        console.log(event)
        if (event.detail.userInfo != null) {
            this.setData({
                userInfo: event.detail.userInfo,
                authorize: true
            })
        }
        // 132 --> 0
        var old = event.detail.userInfo.avatarUrl;
        old = old.split('/');
        if (old[old.length - 1] == 132) {
            old[old.length - 1] = 0;
        }
        old = old.join('/');
        that.setData({
            avatarUrl: old
        })

        // 设置用户数据缓存
        wx.setStorage({
            data: event.detail.userInfo,
            key: 'user_key',
            success: function () {

            }
        })
        // 获取用户数据缓存
        wx.getStorage({
            key: 'user_key',
            success: function (res) {
                console.log(res.data);
                that.setData({
                    user_value: res.data
                })
            }
        })
    },
    onShow: function (options) {

    },
    // 手环功能更多选项 
    onMoreTap: function (event) {

        this.setData({
            wristBandList: {},
            isBlock: true,
            isMore: false
        })
    },
    // 手环功能左右滑动
    touchStart: function (e) {
        var sx = e.touches[0].pageX;
        var sy = e.touches[0].pageY;
        this.data.touchS = [sx, sy]
    },
    touchMove: function (e) {
        var sx = e.touches[0].pageX;
        var sy = e.touches[0].pageY;
        this.data.touchE = [sx, sy]
    },
    touchEnd: function (e) {
        var start = this.data.touchS;
        var end = this.data.touchE;
        if (start[0] < end[0] - 50) {
            this.setData({
                wristBandList: Data.wristbandList,
                isMore: true,
                isBlock: false
            })
        }
        else if (start[0] > end[0] + 50) {
            this.setData({
                isMore: false,
                wristBandList: {},
                isBlock: true
            })
        } else {
            console.log("静止");
        }
    },
    // 点击头像放大
    onImageTap: function (event) {
        var url = event.currentTarget.dataset.src;
        wx.previewImage({
            urls: [url],
            current: url,
        })
    },
    // 点击手环显示/隐藏手环功能
    onListBlockTap: function (event) {
        var isListBlock = this.data.isListBlock;
        this.setData({
            isListBlock: !isListBlock
        })
    },
    onTimeChange_1: function (event) { this.setData({ time: event.detail.value }) },
    onTimeChange_2: function (event) { this.setData({ time: event.detail.value }) },
    onTimeChange_3: function (event) { this.setData({ time: event.detail.value }) },
    onTimeChange_4: function (event) { this.setData({ time: event.detail.value }) },

    onSwitchCheck: function (event) {
        var status = event.detail.value;
        if (status == true) {
            this.setData({
                tipBlock: true
            })
        }
    },
    onCancelTap: function (event) {
        this.setData({
            tipBlock: false
        })
    },
    onHomePageTap: function (event) {
        wx.navigateTo({
            url: 'homePage/homePage',
        })
    },
    onIconTap: function(event){
        var title = event.currentTarget.dataset.title;
        if(title == '目标统计'){
            wx.navigateTo({
              url: '',
            })
        }
        if(title == '积分签到'){
            wx.navigateTo({
              url: 'sign-in/sign-in?title=' + title
            })
        }
    },
    onDetailTap: function (event) {
        var that = this;
        var id = event.currentTarget.dataset.id;
        var title = event.currentTarget.dataset.title;
        
        if (id == 0) {
            wx.navigateTo({
                url: 'planning/planning?title=' + title,
            })
        }
        if (id == 1) {
            wx.navigateTo({
                url: 'order-form/order-form?title=' + title,
            })
        }
        if (id == 2) {
            wx.navigateTo({
                url: 'order-address/order-address?title=' + title,
            })
        }
        if (id == 3) {
            wx.navigateTo({
                url: 'join-circle/join-circle?title=' + title,
            })
        }
        if (id == 4) {
            wx.navigateTo({
                url: 'user-feedback/user-feedback?title=' + title,
            })
        }

    }
})