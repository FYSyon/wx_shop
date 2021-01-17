// pages/user/order-address/order-address.js
Page({
    data: {
        add_address: false,
        region: ['', '', ''],
        customItem: '全部'
    },
    onLoad: function (options) {
        var title = options.title;
        wx.setNavigationBarTitle({
            title: title,
        })
    },
    onAddressTap: function (event) {
        this.setData({
            add_address: true
        })
    },
    onCancelTap: function (event) {
        this.setData({
            add_address: false
        })
    },
    bindRegionChange: function(event){
        this.setData({
            region: event.dedail.value
        })
    }
})