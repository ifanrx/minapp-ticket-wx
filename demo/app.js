const config = require('./config')
App({
  onLaunch: function() {
    require('minapp-sdk')
    wx.BaaS.auth.loginWithWechat()
    wx.BaaS.init(config.clientID)
  }
})
