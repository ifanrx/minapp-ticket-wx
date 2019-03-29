Component({
  properties: {
    disappearAfterClick: {
      type: Boolean,
      value: false,
    }
  },
  data: {
    tapped: false,
  },
  methods: {
    reportTicket: e => {
      wx.BaaS.wxReportTicket(e.detail.formId)
    },
    handleTap() {
      this.setData({
        tapped: true,
      })
    },
  },
})
