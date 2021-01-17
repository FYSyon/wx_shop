// pages/lunpo/lunpo1.js
Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    back_img:['https://sz-download-ipv6.ftn.qq.com/ftn_handler/c67991f00b55a4ccb07f680b80c06084f6d9a6c59f84d5f0a74aa26823e45af38d03fdc90d2baf59872b89511eef46c8c4155be142ee0d1492961f996b4432c0/?fname=%E5%81%A5%E8%BA%AB4.jpg&k=0839316619ff9fc67fd4165c12315716045a0150555552091b5a0152061c5108535f1c0450030714035f535207520308060002073438658497f0dc521a5b155e3604&code=691f41e9&fr=00&&txf_fid=28382b4fced5ff3de0c57243eca010b84b03d1f6&xffz=340435',
              'https://sz-download-ipv6.ftn.qq.com/ftn_handler/957bce4348b166391a3ce5974b33ee484fad63610dc13ce3be13d4a704c821a8c991ab162ecc31b927ef62c4a34c3bee303c6406f93eba7cd5929758674ab9d0/?fname=%E5%81%A5%E8%BA%AB3.jpg&k=5a3162639f3bccc92ddc4559453903195509505b5658075449065753011405015c044f5a020b571b50060006505d0905075706006330318bc5f88f504d534151640c&code=d1bcc916&fr=00&&txf_fid=88657fe27f42657a898c40b0a0f91bb2b3b2e51b&xffz=195844',
              'https://sz-download-ipv6.ftn.qq.com/ftn_handler/753949b66a3b5a46caf4e59f27ed1eec4e9472caa300ae8c7f1241f182e9f497bcf606add288d32765500a30a261c6130787566fff303d7d201368235196d67a/?fname=%E5%81%A5%E8%BA%AB3.jpg&k=5a3162639f3bccc92ddc4559453903195509505b5658075449065753011405015c044f5a020b571b50060006505d0905075706006330318bc5f88f504d534151640c&code=d1bcc916&fr=00&&txf_fid=88657fe27f42657a898c40b0a0f91bb2b3b2e51b&xffz=195844'],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,

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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
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

    //触发上啦事件
    onReachBottom(){
      console.log('上拉数据')
    }

})