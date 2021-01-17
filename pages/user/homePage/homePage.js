// pages/user/homePage/homePage.js
Page({
    data: {
        message: [],
        userInfo:{},
        showMore: false,
    },
    onLoad: function (options) {
        var that = this;
        this.setData({
            message: [
                {
                    left: "用户名",
                    right: "k"
                },
                {
                    left: "性别",
                    right: "男"
                },
                {
                    left: "地区",
                    right: "广东  汕头"
                },

            ]
        })

        wx.getStorage({
            key: 'user_key',
            success(res){
                that.setData({
                    userInfo: res.data
                })
            }
          })
    },
    onMoreShow: function(event){
        this.setData({
        showMore: !this.data.showMore
        })
    },
    onImageTap: function(event){
        var avatar = event.currentTarget.dataset.avatar;
        wx.previewImage({
          urls: [avatar],
          current: avatar
        })
    }
})