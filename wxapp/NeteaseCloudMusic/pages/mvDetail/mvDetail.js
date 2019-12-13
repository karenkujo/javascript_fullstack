// pages/mvDetail/mvDetail.js
const baseUrl = 'http://localhost:3000'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvUrl: '',
    mvDeatil: {}
  },
  /* 获取MV地址 */
  getMvUrl (id) {
    let that = this
    wx.request({
      url: baseUrl + '/mv/url',
      data: {
        id: id
      },
      success (res) {
        if (res.data.code == 200) {
          // console.log(res.data.data)
          that.setData({
            mvUrl: res.data.data.url
          })
        }
      }
    })
  },
  /* 获取MV详情 */
  getMvDetail (id) {
    let that = this
    wx.request({
      url: baseUrl + '/mv/detail',
      data: {
        mvid: id
      },
      success (res) {
        if (res.data.code == 200) {
          console.log(res.data.data)
          that.setData({
            mvDeatil: res.data.data
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id) 10900391
    this.getMvUrl(10900391)
    this.getMvDetail(10900391)
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