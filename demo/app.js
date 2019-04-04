const config = require('./config')
App({
  onLaunch: function() {
    require('minapp-sdk')
    // wx.BaaS.auth.loginWithWechat()
    wx.BaaS.login(false)
    wx.BaaS.init(config.clientID)
  }
})
