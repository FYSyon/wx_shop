import { request } from "../../../request/index.js";
import regeneratorRuntime from '../../../lib/runtime/runtime';
import { login } from "../../../utils/asyncWx.js";

Page({
  // 获取用户信息
   handleGetUserInfo(e) {
    wx.navigateToMiniProgram({
      appId: 'wx6c2423928b92ca14',
      path: 'pages/index/index',
      extraData: {
          'aid': '1',  
          'name': 'XorPay充值',
          'pay_type': 'jsapi',
          'price': '0.02',
          'order_id': 'm-5',
          'notify_url': 'https://abc.com/notify',
          'sign': md5.hexMD5('XorPay充值' + 'jsapi' + '0.02' + 'm-5' + 'https://abc.com/notify' + 'app secret'),
      },
      //envVersion: 'develop',
      fail(res) {
          wx.showToast({
              title: res.errMsg,
              icon: 'none',
          })
      },
      success(res) {
          wx.showToast({
              title: 'ok',
              icon: 'none',
          })
      }
  })
    
}
})
