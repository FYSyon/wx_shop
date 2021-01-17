var data = require("../../../data/circle-data.js");
const app = getApp()
wx.cloud.init()
const db = wx.cloud.database();//初始化数据库

Page({
  data: {
    winHeight: 0,
    details: [],
    currentTab: 0,  //预设当前项的值
    scrollLeft: 0,  //tab标题的滚动条位置
    imgbox: [],//选择图片
    fileIDs: [],//上传云存储后的返回值
    list: [
      {
        text: '共享资源',
        url: '../file/file?title='
      }, {
        text: '付费资源',
        url: '../file/file?title='

      }, {
        url: '../file/file?title=',
        text: '限时资源'
      }, {
        url: '../file/file?title=',
        text: '我的资源'
      }
    ]
  },

  onLoad: function () {
    var winHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      winHeight: winHeight,
      details: data.details
    })
  },

  //滚动切换标签样式
  switchTap: function (event) {
    this.setData({
      currentTab: event.detail.current
    })
    this.checkCor();
  },
  //点击标题切换当前项时改变样式
  switchNav: function (event) {
    var cur = event.target.dataset.current;
    if (this.data.currentTab == cur) return false;
    else {
      this.setData({
        currentTab: cur
      })
    }
    console.log(cur);
  },
  //判断当前滚动条超过一屏时，设置tab标题滚动条
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  nav: function (e) {
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    let url = this.data.list[index].url
    wx.navigateTo({
      url: url + this.data.list[index].text
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  onVideoTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../video-detail/video-detail?id=' + postId,
    })
  },

    // 删除照片 &&
    imgDelete1: function (e) {
      let that = this;
      let index = e.currentTarget.dataset.deindex;
      let imgbox = this.data.imgbox;
      imgbox.splice(index, 1)
      that.setData({
        imgbox: imgbox
      });
    },
    // 选择图片 &&&
    addPic1: function (e) {
      wx.cloud.init()
      var imgbox = this.data.imgbox;
      console.log(imgbox)
      var that = this;
      var n = 5;
      if (5 > imgbox.length > 0) {
        n = 5 - imgbox.length;
      } else if (imgbox.length == 5) {
        n = 1;
        wx.showToast({
          title: '不能多了',
          
        })
        return ''
      }
      wx.cloud.init(),
      wx.chooseImage({
        count: n, // 默认9，设置图片张数
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
           console.log(res)
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
  
          if (imgbox.length == 0) {
            imgbox = tempFilePaths
          } else if (5 > imgbox.length) {
            imgbox = imgbox.concat(tempFilePaths);
          }
          that.setData({
            imgbox: imgbox
          });
        }
      })
    },
  
    //图片
    imgbox: function (e) {
      this.setData({
        imgbox: e.detail.value
      })
    },
  
  
    //发布按钮
    fb: function (e) {
      if (!this.data.imgbox.length) {
        wx.showToast({
          icon: 'none',
          title: '图片类容为空'
        });
      } else {
          //上传图片到云存储
          wx.showLoading({
            title: '上传中',
          })
          let promiseArr = [];
          for (let i = 0; i < this.data.imgbox.length; i++) {
            promiseArr.push(new Promise((reslove, reject) => {
              let item = this.data.imgbox[i];
              let suffix = /\.\w+$/.exec(item)[0];//正则表达式返回文件的扩展名
              wx.cloud.uploadFile({
                cloudPath: new Date().getTime() + suffix, // 上传至云端的路径
                filePath: item,// 小程序临时文件路径
                success: res => {
                  console.log(res)
                  console.log(item), 
                  this.setData({
                    fileIDs: this.data.fileIDs.concat(res.fileID)
                  });
                  console.log(res.fileID)//输出上传后图片的返回地址
                  reslove();
                  wx.hideLoading();
                  wx.showToast({
                    title: "上传成功",
                  })
                },
                fail: res=>{
                  wx.hideLoading();
                  wx.showToast({
                    title: "上传失败",
                  })
                }
              })
            }));
          }
          Promise.all(promiseArr).then(res => {//等数组都做完后做then方法
            console.log("图片上传完成后再执行")
            this.setData({
              imgbox:[]
            })
          })
        }
    },
})
