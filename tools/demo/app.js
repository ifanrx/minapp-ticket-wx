App({
  onLaunch: function() {
    require('./sdk/sdk-wechat.2.0.5-a')
    wx.BaaS.login(false)

    let clientID = '知晓云管理后台获取到的 ClientID'
    wx.BaaS.init(clientID)
  }
})
