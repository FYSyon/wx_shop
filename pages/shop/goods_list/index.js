import {swiper_require as require} from "../../../request/swiper-requit"

// pages/goods_list/index.js
Page({

  
  /**
   * 页面的初始数据
   */
  data: {
    //swiper
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    back_img:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585484680168&di=3b03b120ce7840f6b41ff1a598e961c1&imgtype=0&src=http%3A%2F%2Fdl.ppt123.net%2Fpptbj%2F201603%2F2016030410335208.jpg',
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585484680168&di=3b03b120ce7840f6b41ff1a598e961c1&imgtype=0&src=http%3A%2F%2Fdl.ppt123.net%2Fpptbj%2F201603%2F2016030410335208.jpg',
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585484680168&di=3b03b120ce7840f6b41ff1a598e961c1&imgtype=0&src=http%3A%2F%2Fdl.ppt123.net%2Fpptbj%2F201603%2F2016030410335208.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    //商品分累
    tabs1:[
      {
        id:0,
        value:'学习',
        isActive:true
      },{
        id:1,
        value:'健身',
        isActive:false
      },{
        id:0,
        value:'生活',
        isActive:false
      },
    ],
    goods_list:[],
    goods_list1:[
      {
        goods_id:0,
        goods_name:"口才",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:1,
        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:2,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:3,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:4,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:5,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:6,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:7,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:8,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:9,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:10,
        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:11,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:12,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      },
      {
        goods_id:13,

        goods_name:"口才三绝正版全套为人三会套装修心",
        goods_small_logo:'https://img.alicdn.com/imgextra/i4/2396691598/O1CN01P1s9nH1NfvUjajAtz_!!0-item_pic.jpg_430x430q90.jpg',
        maniy:96,
        active:0,
        pv:2000
      }
      

    ],
    goods_list2:[
      {
        goods_name:'艾美仕家用举重床杠铃架多功能卧推架杠铃床胸肌腿部锻炼',
        goods_small_logo:'http://img11.360buyimg.com/n2/jfs/t1/3006/38/9760/164749/5bad7708Ee3c22b1e/8407736e413cdf13.jpg',
        maniy:366,
        pv:555,
        goods_id:1001,
      },
      {
        goods_name:'艾美仕家用举重床杠铃架多功能卧推架杠铃床胸肌腿部锻炼',
        goods_small_logo:'http://img11.360buyimg.com/n2/jfs/t1/3006/38/9760/164749/5bad7708Ee3c22b1e/8407736e413cdf13.jpg',
        maniy:366,
        pv:555,
        goods_id:1000,
      },
      {
        goods_name:'艾美仕家用举重床杠铃架多功能卧推架杠铃床胸肌腿部锻炼',
        goods_small_logo:'http://img10.360buyimg.com/n7/jfs/t1/94542/40/14799/124429/5e69cf72E333b7d1e/f38b4180339e02c6.jpg',
        maniy:366,
        pv:555,
        goods_id:1002,
      },
      {
        goods_name:'艾美仕家用举重床杠铃架多功能卧推架杠铃床胸肌腿部锻炼',
        goods_small_logo:'http://img10.360buyimg.com/n7/jfs/t1/109597/16/134/98187/5df306b0Ef626cd14/b450475763982e24.jpg',
        maniy:366,
        pv:555,
        goods_id:1003,
      },
      {
        goods_name:'艾美仕家用举重床杠铃架多功能卧推架杠铃床胸肌腿部锻炼',
        goods_small_logo:'http://img12.360buyimg.com/n7/jfs/t1/87706/18/14503/138821/5e63c8c9Eed8684c7/144f10187a898fce.jpg',
        maniy:366,
        pv:555,
        goods_id:1004,
      },
      {
        goods_name:'艾美仕家用举重床杠铃架多功能卧推架杠铃床胸肌腿部锻炼',
        goods_small_logo:'http://img12.360buyimg.com/n7/jfs/t1/87706/18/14503/138821/5e63c8c9Eed8684c7/144f10187a898fce.jpg',
        maniy:366,
        pv:555,
        goods_id:1005,
      },
      {
        goods_name:'器材吸盘式仰卧板懒人美腿收腹机美腰机减肚子健腹器',
        goods_small_logo:'http://img14.360buyimg.com/n7/jfs/t1/1520/38/5854/196822/5ba0d948E453964cc/7fd52bb23a03e47c.jpg',
        maniy:366,
        pv:555,
        goods_id:1006,
      },
      {
        goods_name:'器材吸盘式仰卧板懒人美腿收腹机美腰机减肚子健腹器',
        goods_small_logo:'http://img14.360buyimg.com/n7/jfs/t1/1520/38/5854/196822/5ba0d948E453964cc/7fd52bb23a03e47c.jpg',
        maniy:366,
        pv:555,
        goods_id:1007,
      },
      {
        goods_name:'椅专业多功能腹肌板卧推训练仰卧起坐运动',
        goods_small_logo:'http://img13.360buyimg.com/n2/jfs/t15826/83/1702474679/139130/a75d30e2/5a5c0871N8a61c1cc.jpg',
        maniy:366,
        pv:555,
        goods_id:1008,
      },
      {
        goods_name:'椅专业多功能腹肌板卧推训练仰卧起坐运动',
        goods_small_logo:'http://img12.360buyimg.com/n7/jfs/t1/87706/18/14503/138821/5e63c8c9Eed8684c7/144f10187a898fce.jpg',
        maniy:366,
        pv:555,
        goods_id:1009,
      }
    ],
    goods_list3:[
      {
        goods_name:'防静电美发按摩梳子',
        goods_small_logo:'http://img10.360buyimg.com/n7/jfs/t1/67573/26/1925/252305/5d0364d5Ec7e9bcb7/9502119f170291fa.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2001
      },
      {
        goods_name:'防静电美发按摩梳子',
        goods_small_logo:'http://img10.360buyimg.com/n7/jfs/t1/67573/26/1925/252305/5d0364d5Ec7e9bcb7/9502119f170291fa.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2002
      },
      {
        goods_name:'防静电美发按摩梳子',
        goods_small_logo:'http://img10.360buyimg.com/n7/jfs/t1/67573/26/1925/252305/5d0364d5Ec7e9bcb7/9502119f170291fa.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2003
      },
      {
        goods_name:'玛丽弟弟浴室置物架毛巾架不锈钢浴巾架厕所卫生间收纳架',
        goods_small_logo:'http://img13.360buyimg.com/n7/jfs/t3469/187/2334057984/480761/327217cb/584b92dcN9ec8916c.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2004
      },
      {
        goods_name:'防静电美发按摩梳子',
        goods_small_logo:'http://img10.360buyimg.com/n7/jfs/t1/67573/26/1925/252305/5d0364d5Ec7e9bcb7/9502119f170291fa.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2005
      },
      {
        goods_name:'浴室用品浴花加大沐浴球洗澡球',
        goods_small_logo:'http://img14.360buyimg.com/n7/jfs/t20053/107/257710394/496126/d27e1c7a/5aed7d11Nf683e2e1.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2006
      },
      {
        goods_name:'浴室卫生间置物架挂钩毛巾架免打孔浴巾架 单杆',
        goods_small_logo:'http://img12.360buyimg.com/n7/jfs/t1/81392/14/6141/200169/5d42a96fE84d22734/5224014e26a6a75c.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2007
      },
      {
        goods_name:'挂钩贴浴室强力粘钩子挂衣钩衣服门后挂钩',
        goods_small_logo:'http://img10.360buyimg.com/n7/jfs/t1/53743/37/15284/205219/5dc28a44Ed4cf87c3/d56872006f9c18aa.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2008
      },
      {
        goods_name:'带压圈垃圾桶塑料纸篓',
        goods_small_logo:'http://img13.360buyimg.com/n7/jfs/t1/14347/28/10797/130303/5c8b450bE38d161d7/6e7bbb8c6822baf3.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2009
      },
      {
        goods_name:'地垫地毯浴室卫生间门厅进门口脚踏脚垫门垫创意简约家居家用',
        goods_small_logo:'http://img12.360buyimg.com/n7/jfs/t1/41678/25/8207/105342/5d1b23b7Ec813fdeb/5993cf4e2b7bc15e.jpg',
        maniy:18,
        pv:66,
        active:0,
        goods_id:2010
      },
    ]
  },
//请求接口有时候要的参数
queryparams:{
  query:'',   //关键字
  cid:'',   //分类id
  pagenum:1,    //页码
  pagesize:10   //页容量
},
//
//总页数
Pages:1,
//当前页面
childer_index:0,
/*上啦刷新 */
onReachBottom(){
  this.queryparams.pagenum++
/*  if(this.queryparams.pagenum>this.Pages){
    wx.showToast({title:'没下一页数据'})
  }else{
  //  this.getsp(this.queryparams)
    this.getimage_data('http://127.0.0.1:3006/2')
  }
*/

if(this.data.goods_list.length>=11){
  wx.showToast({title:'没下一页数据'})
}else{
  console.log(this.childer_index)
//  this.getsp(this.queryparams)
  if(this.childer_index===0){
  this.getimage_data('http://127.0.0.1:3006/2')
  }else if(this.childer_index===1){
    this.getimage_data('http://127.0.0.1:3006/fitness2')
  }else if(this.childer_index===2){
    this.getimage_data('http://127.0.0.1:3006/live2')
  }
}
},

//下拉刷新
onPullDownRefresh(){
  console.log('xiala')
  this.queryparams.pagenum=1
  this.setData({
    goods_list:[]
  })
//  this.getsp(this.queryparams)
if(this.childer_index===0){
  this.getimage_data('http://127.0.0.1:3006/')
}else if(this.childer_index===1){
  this.getimage_data('http://127.0.0.1:3006/fitness')
}else if(this.childer_index===2){
  this.getimage_data('http://127.0.0.1:3006/live')
}
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // console.log(options)
    this.queryparams.cid=5,
    
  //  this.getsp(this.queryparams)
    this.getimage_data('http://127.0.0.1:3006/')
  },
    //请求商品数据
    getsp(d){
      require({url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/search",data:d})
      .then((d)=>{
      //  console.log(d.data.message)
        this.setData({
          goods_list:[...this.data.goods_list,...d.data.message.goods]
        })
        this.Pages = Math.ceil(d.data.message.total/this.queryparams.pagesize)  
      })
      .catch((e)=>{
        console.log(e)
      })
    },
//   切换时触发得事件
  childer(e){
    //  console.log(e)
    const index = e.detail
    this.childer_index=index
    const {tabs1} = this.data //对象解构
    if(this.childer_index===2){
      this.setData({
        goods_list:[]
      })
      this.getimage_data('http://127.0.0.1:3006/live')
    }
    if(this.childer_index===1){
      this.setData({
        goods_list:[]
      })
      this.getimage_data('http://127.0.0.1:3006/fitness')
   }if(this.childer_index===0){
    this.setData({
      goods_list:[]
    })
    this.getimage_data('http://127.0.0.1:3006/')
 }

    tabs1.forEach((v,i)=>{
     // console.log(v,i)
     index===i?v.isActive=true:v.isActive=false
    })
    this.setData({
      tabs1
    })
    },

    getimage_data(url){
      require({url:url})
      .then((d)=>{
        console.log(d)
        this.setData({
          goods_list:[...this.data.goods_list,...d.data.message]
        })
        wx.setStorage({
          key: 'list',
          data: this.data.goods_list
        })
      })
      .catch((e)=>{
        console.log(e)
      })
    },
    //图片放大
    magnify(e){
      const current=e.currentTarget.dataset.url
      const urls=[...this.data.back_img]
      wx.previewImage({
        current,
        urls
      });
    }
    
})