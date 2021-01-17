// pages/user/join-circle/join-circle.js
Page({
    data: {
        circle: [],
        imageUrl:[],
    },
    onLoad: function (options) {
        var title = options.title;
        wx.setNavigationBarTitle({
          title: title,
        })
        this.setData({
            circle: ["插本交流圈", "高考备考圈", "健身达人圈"],
            imageUrl: ["/images/icon/circle.png","/images/icon/renovate.png",
            "/images/icon/home.png","/images/icon/add-black.png",]
        })
    },

    moreBtn: function () {
        this.plus();
    },
    //点击弹出
    plus: function () {
        if (!this.data.isPopping) {
            //弹出
            this.popp();
            this.setData({
                isPopping: true
            })
        }
        else {
            //缩回
            this.takeback();
            this.setData({
                isPopping: false
            });
        }
    },
    input: function () {
        console.log("input")
    },
    transpond: function () {
        console.log("transpond")
    },
    collect: function () {
        console.log("transpond")
    },

    //弹出动画
    popp: function () {
        //plus顺时针旋转
        let animationPlus = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease'
        })
        let animationcollect = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease'
        })
        let animationTranspond = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease'
        })
        let animationInput = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease'
        })
        animationPlus.rotateZ(180).step();
        animationcollect.translate(-0, -100).rotateZ(0).opacity(1).step();
        animationTranspond.translate(-85, -75).rotateZ(0).opacity(1).step();
        animationInput.translate(-80, 10).rotateZ(0).opacity(1).step();
        this.setData({
            animPlus: animationPlus.export(),
            animCollect: animationcollect.export(),
            animTranspond: animationTranspond.export(),
            animInput: animationInput.export(),
        })
    },
    //收回动画
    takeback: function () {
        //plus逆时针旋转
        let animationPlus = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease'
        })
        let animationcollect = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease'
        })
        let animationTranspond = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease'
        })
        let animationInput = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease'
        })
        animationPlus.rotateZ(0).step();
        animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
        animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();
        animationInput.translate(0, 0).rotateZ(0).opacity(0).step();
        this.setData({
            animPlus: animationPlus.export(),
            animCollect: animationcollect.export(),
            animTranspond: animationTranspond.export(),
            animInput: animationInput.export(),
        })
    }

})