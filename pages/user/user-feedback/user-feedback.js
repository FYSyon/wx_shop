// pages/user/user-feedback/user-feedback.js
Page({
    data: {

    },

    onLoad: function (options) {
        var title = options.title;
        wx.setNavigationBarTitle({
          title: title,
        })
    },
})