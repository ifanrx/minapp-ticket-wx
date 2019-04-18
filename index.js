Component({
  ready() {
    if (typeof wx.BaaS === 'undefined') {
      throw new Error('请先接入知晓云 SDK')
    }
  },
  methods: {
    reportTicket: e => {
      wx.BaaS.wxReportTicket(e.detail.formId, {enableThrottle: true})
    },
  },
})
