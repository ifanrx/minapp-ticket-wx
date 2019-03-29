Component({
  properties: {
    disappearAfterClick: {
      type: Boolean,
      value: false,
    }
  },
  data: {
    hideButton: false,
  },
  ready() {
    if (typeof wx.BaaS === 'undefined' || /^v?(\d+)\./i.exec(wx.BaaS._config.VERSION)[1] < 2) {
      throw new Error('请使用 v2.0 版本以上的知晓云 SDK')
    }
  },
  methods: {
    reportTicket: e => {
      wx.BaaS.wxReportTicket(e.detail.formId)
    },
    handleTap() {
      this.setData({
        hideButton: true,
      })
    },
  },
})
