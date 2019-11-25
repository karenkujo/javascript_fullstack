// pages/play/play.js
const baseUrl = 'http://localhost:3000'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    musicUrl: ''
  },

  // 请求音乐url
  getMusicUrl(id) {
    let that = this
    wx.request({
      url: baseUrl + '/song/url',
      data: {
        id: id
      },
      success(res) {
        if (res.data.code === 200) {
          that.setData({
            musicUrl: res.data.data[0].url
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getMusicUrl(options.id)
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