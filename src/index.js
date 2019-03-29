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
