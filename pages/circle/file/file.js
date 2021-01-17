//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  download: function (e) {
    //  console.log(e.currentTarget.dataset.url)  
    const url = e.currentTarget.dataset.url
    wx.getSavedFileList({  // 获取文件列表
      success(res) {
        res.fileList.forEach((val, key) => { // 遍历文件列表里的数据
          // 删除存储的垃圾数据
          wx.removeSavedFile({
            filePath: val.filePath
          });
        })
      }
    })
    wx.showLoading({
      title: '加载中',

    })
    wx.downloadFile({
      url,
      success: function (res) {
        var filePath = res.tempFilePath;
        const tempFilePath = res.tempFilePath;
        console.log(res, filePath)
        //页面显示加载动画
        wx.saveFile({
          tempFilePath,
          success: function (res) {
            const savedFilePath = res.savedFilePath;
            console.log(savedFilePath)

            // 打开文件
            wx.openDocument({
              filePath: savedFilePath,
              success: function (res) {
                console.log('打开文档成功')
                wx.hideLoading()
              },
            });
          },
          fail: function (err) {
            console.log('保存失败：', err)
            wx.showToast({
              title: '加载失败',
            })
          },

        })
      }
    })
    wx.hideToast()
  },
  onLoad: function (options) {
    var title = options.title;
    wx.setNavigationBarTitle({
      title: title
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
