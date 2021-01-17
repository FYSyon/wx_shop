// pages/goods_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    back_img:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585484680168&di=3b03b120ce7840f6b41ff1a598e961c1&imgtype=0&src=http%3A%2F%2Fdl.ppt123.net%2Fpptbj%2F201603%2F2016030410335208.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585484680168&di=3b03b120ce7840f6b41ff1a598e961c1&imgtype=0&src=http%3A%2F%2Fdl.ppt123.net%2Fpptbj%2F201603%2F2016030410335208.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585484680168&di=3b03b120ce7840f6b41ff1a598e961c1&imgtype=0&src=http%3A%2F%2Fdl.ppt123.net%2Fpptbj%2F201603%2F2016030410335208.jpg'],
    params:{
      
    },
    tabs1:[
      {
        id:0,
        value:'评论区',
        isActive:true
      },{
        id:1,
        value:'我要评论',
        isActive:false
      }
    ],
    info:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取商品id
    const{goods_id,goods_name,pv,maniy}=options
    console.log(goods_id,goods_name,pv,maniy,url)
    const review=Math.ceil(pv/maniy)
    const ar1 =wx.getStorageSync('list')
    const url =[
      "http://img.alicdn.com/bao/uploaded/i3/3790764037/O1CN01r7MPNI1fgzV54x6AV_!!0-item_pic.jpg",
      "http://img.alicdn.com/bao/uploaded/i1/710781888/O1CN01DYG00Q1PokM75h8aJ_!!0-item_pic.jpg",
      "http://img.alicdn.com/bao/uploaded/i3/3790764037/O1CN01r7MPNI1fgzV54x6AV_!!0-item_pic.jpg",
      "http://img.alicdn.com/bao/uploaded/i1/2261778926/O1CN01dPKRom2Fo9nYyRxyV_!!2261778926.jpg",
      "http://img.alicdn.com/bao/uploaded/i3/2097896325/O1CN01uMSD741watgfBdAu7_!!2097896325.jpg",
      "http://img.alicdn.com/bao/uploaded/i2/2671354990/O1CN01jjuGB51mjSwz24uxF_!!0-item_pic.jpg"
    ]
   /* for(let i=0;i<6;i++){
      var d1 = Math.ceil(Math.random()*9)
      var url2 = ar1[d1]['goods_small_logo']
      var but = false
      url.map((v)=>{
        console.log(v===url2)
        but = v===url2
        if(but){
          i--
          return
        }
      })
      if(!but){
        url[i]=ar1[d1]['goods_small_logo']
        console.log(url)
      }
    }*/
    
    this.setData({
      params:{...{goods_id,goods_name,pv,maniy,review,url}}
    })
    console.log(this.data.params)

  },
  
  magnify(e){
    const current=e.currentTarget.dataset.url
    const urls=this.data.params.url
    wx.previewImage({
      current,
      urls
    });
  },
  //评论
  childer(e){
    //  console.log(e)
    const index = e.detail
    const {tabs1} = this.data //对象解构
    
    tabs1.forEach((v,i)=>{
     // console.log(v,i)
     index===i?v.isActive=true:v.isActive=false
    })
    this.setData({
      tabs1
    })
    },
    confirm(e){
      let that = this
      wx:wx.showToast({
        title: '提交成功',
        icon: 'success',
        mask:true,
        success: function() {
          that.setData({
             info:''
           })
        }
      })
    },
    hanlecart2(){
      this.hanlecart()
      wx.navigateTo({
        url: '/pages/shop/cart/index'
      })
    },
    hanlecart(){
    //  console.log("出口")
    let cart=wx.getStorageSync('cart')||[]
    let item=this.data.params
    let index=cart.findIndex(v=>v.goods_id===item.goods_id)
    if(index===-1){
      item.num=1
      item.checked=true
      cart.push(item)
    }else{
      cart[index].num++
    }
    wx.setStorageSync('cart', cart)
    wx.showToast({
      title:'加入成功',
      mask:true
    })
    }
})