// pages/video-detail/video-detail.js
var data = require("../../../data/circle-data.js");
Page({
    data: {

    },
    onLoad: function (options) {
        // 根据id选择渲染不同页面数据
        var postId = options.id;
        this.data.currentPostId = postId; //页面id
        var detailData = data.details[postId];
        this.setData({
            detailData: detailData
        })
        // 收藏
        var postsCollected = wx.getStorageSync('post_collected')
        if (postsCollected) {
            var postCollected = postsCollected[postId]
            this.setData({
                collected: postCollected
            })
        }
        else {
            var postsCollected = {};
            postsCollected[postId] = false;
            wx.setStorageSync('post_collected', postsCollected)
        }
    },
    onCollectionTap: function (event) {
        var postsCollected = wx.getStorageSync('post_collected');
        var postCollected = postsCollected[this.data.currentPostId];
        // 收藏变成未收藏，未收藏会变成收藏
        postCollected = !postCollected;
        postsCollected[this.data.currentPostId] = postCollected;
        this.showToast(postsCollected, postCollected);
    },
    /*
      收藏
    */
    showToast: function (postsCollected, postCollected) {
        // 更新文章的缓存值
        wx.setStorageSync('post_collected', postsCollected)
        // 更新数据绑定变量，实现切换图片
        this.setData({
            collected: postCollected
        })
        wx.showToast({
            title: postCollected ? "收藏成功" : "取消成功",
            icon: "success",
            duration: 1000
        })
    },
    /* 
      分享
    */
    onShareTap: function (event) {
        var itemList = [
            "分享给微信朋友",
            "分享到朋友圈",
            "分享到QQ",
            "分享到新浪微博"
        ]
        wx.showActionSheet({
            itemList: itemList,
            itemColor: '#405f80',
            success: function (res) {
                wx.showModal({
                    title: '用户  ' + itemList[res.tapIndex],
                    content: '很抱歉，目前无法实现分享功能，敬请期待',
                    showCancel: true,
                    calcelText: '取消',
                    cancelColor: '#999',
                    confirmText: '分享',
                    confirmColor: '#405f80'
                })
            }
        })
    },
})