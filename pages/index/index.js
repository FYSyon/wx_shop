var intt;
wx.cloud.init() 
const db = wx.cloud.database()

Page({
  data: {
    cc_data:'',
    input1:'',
    data1: "09:00",
    data2: "10:00",
    isBlock: false,
    time: "09:00",
    time2: "00:00",
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    timecount: '00:00:00',
    cost: 0,
    flag: 1,
    endtime: "",
    stop: false,
    isPlayingMusic: false,
    music: {}
  },

  onLoad: function (options) {
    this.cc()
  },

  onReady: function () {
  },
  onDateChange: function (event) {
    var date = event.detail.value;
    this.setData({
      time: date
    })
  },
  onDateChange2:function(e){
    var date = e.detail.value;
    var index = e.currentTarget.dataset.index
    console.log(this.data.cc_data[index].text)
    this.setData({
      time2: date
    })
    db.collection('tables1').where({
      name:wx.getStorageSync('openid'),
      text:this.data.cc_data[index].text
    }).update({
      data: {
        data: this.data.time2
      },
      success: function(res) {
        console.log(res.data)
      }
    })
    this.cc()
  },
  onBlockTap: function (event) {
    this.setData({
      isBlock: true
    })
  },
  clearTap: function (event) {
    this.setData({
      isBlock: false
    })
  },
  //开始
  start: function () {
    var that = this;
    //停止（暂停）
    clearInterval(intt);
    //时间重置
    that.setData({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      stop: !this.data.stop
    })
    intt = setInterval(function () { that.timer() }, 50);
    //暂停
    if (this.data.stop == false) {
      clearInterval(intt);
    }
  },

  //停止
  Reset: function () {
    var that = this
    clearInterval(intt);
    that.setData({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      timecount: '00:00:00',
      stop: false,

    })
  },
  timer: function () {
    var that = this;
    that.setData({
      millisecond: that.data.millisecond + 5
    })
    if (that.data.millisecond >= 100) {
      that.setData({
        millisecond: 0,
        second: that.data.second + 1
      })
    }
    if (that.data.second >= 60) {
      that.setData({
        second: 0,
        minute: that.data.minute + 1
      })
    }

    if (that.data.minute >= 60) {
      that.setData({
        minute: 0,
        hour: that.data.hour + 1
      })
    }
    that.setData({
      timecount: that.data.hour + ":" + that.data.minute + ":" + that.data.second + ":" + that.data.millisecond
    })
  },
  setMusicMonitor: function () {
    //监听音乐
    var that = this;
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        isPlayingMusic: true
      })
    });
    wx.onBackgroundAudioPause(function () {
      this.setData({
        isPlayingMusic: false
      })
    });
    wx.onBackgroundAudioStop(function () {
      this.setData({
        isPlayingMusic: false
      })
    })
  },
  onMusicTap: function (event) {
    this.setData({
      music: {
        url: "https://sz-download-ipv6.ftn.qq.com/ftn_handler/d8aef01181fb1394a8c93818e25eac4a12ccb90528b8bf0948d132daab179f387cd6b27f4cd9adc9a73136182a35182e938a3ba42375801678409b61409955ad/?fname=%E5%BC%A0%E6%9D%B0%E3%80%81%E5%BC%A0%E7%A2%A7%E6%99%A8%20-%20%E5%8F%AA%E8%A6%81%E5%B9%B3%E5%87%A1.mp3&k=33386461baaf0fcc2ad5435b1f65541c575c55505a5502034e5e020208485204060849580f04531e5b5b54510d03550301095259397e66e6a685b8c09bb0a382af8bdb411445b088b192a2dc8ed7485e130b645c&code=c8da9ef3&fr=00&&txf_fid=2d38b42e4ea001e9e814ba1c95c8936e7b14a5b7&xffz=9844093",
        title: "张杰、张碧晨-只要平凡",
        coverImg: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002yXkxN0ExWHD_1.jpg?max_age=2592000"
      }
    })
    var isPlayingMusic = this.data.isPlayingMusic;
    var that = this;
    // var currentPostId = this.data.currentPostId;
    // var postData = postsData.postList[currentPostId];
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: that.data.music.url,
        title: that.data.music.title,
        coverImgUrl: that.data.music.coverImg
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },
  input(e){
    var input1 = e.detail.value
    this.setData({
      input1
    })
  },
  cc(){
    var this1 =this
    db.collection('tables1').where({
      name:wx.getStorageSync('openid')
    }).get(
      {
        success:function(res){
          console.log(res.data)
          this1.setData({
            cc_data:res.data 
          })
        }
      }
    )
  },
  quer(){
          db.collection('tables1').add({
           data:{
            text:this.data.input1,
            name:wx.getStorageSync('openid'),
            data:this.data.data1,
            old:this.data.data2
           },
           success:function(res){
            console.log(res)
            wx.showToast({
              title: '加入成功',
            })
           },fail:function(e){
             console.log(e)
           }
         })
         this.clearTap()
         this.cc()
  }
})

