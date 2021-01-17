export let swiper_require = function(pars){ 
    wx.showLoading({
        title:'加载中',
        mask:true
    })

    return new Promise((req,reject)=>{
     wx.request({
         ...pars,
        //仅为示例，并非真实的接口地址
        success:(res)=>{
         // console.log(res.data)
         req(res)
        },
        fail:(e)=>{
         // console.log(e)  
         reject(e)
        },
        complete: function() {
            wx.hideLoading()
        }
      })
})
}