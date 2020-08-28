// pages/soul/soul.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData() {
    const self = this;
    self.setData({
      content: null
    })
    wx.request({
      url: 'https://v1.alapi.cn/api/soul?token=yuGn8BtBb1y86tk6ZXW3',
      success: (res) => {
        if (res.data.code === 200) {
          self.setData({
            content: res.data.data.title
          })
        } else {
          wx.showModal({
            title: res.data.msg,
            showCancel: false
          })
        }
      },
      fail: (err) => {
        wx.showModal({
          title: err.msg,
          showCancel: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})