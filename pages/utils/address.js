//获取收获地址
export function address(){
    return new Promise((res,reject)=>{
    wx.getSetting({//获取配置页面
        success: (result) => {
         let but = result.authSetting["scope.address"];
         if(but===false){
           wx.openSetting({//进入配置页面修改配置
             success: (result1) => {
            //  console.log(result1)
             }
           });
         }
         wx.chooseAddress({//进入获取地址的页面
            success: (result) => {
              res(result)
            }
          });
        },
      });
    })
}