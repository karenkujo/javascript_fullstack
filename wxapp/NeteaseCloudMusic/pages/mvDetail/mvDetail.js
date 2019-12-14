// pages/mvDetail/mvDetail.js
const baseUrl = 'http://localhost:3000'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvUrl: '',
    mvDeatil: {},
    singer: {}
  },
  /* 获取MV地址 */
  getMvUrl(id) {
    let that = this
    wx.request({
      url: baseUrl + '/mv/url',
      data: {
        id: id
      },
      success(res) {
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
  getMvDetail(id) {
    let that = this
    wx.request({
      url: baseUrl + '/mv/detail',
      data: {
        mvid: id
      },
      success(res) {
        if (res.data.code == 200) {
          // console.log(res.data.data)
          if (res.data.data.playCount >= 100000000) {
            let num = res.data.data.playCount / 100000000
            res.data.data.playCount = num.toFixed(1) + '亿'
          }
          if (res.data.data.playCount >= 100000) {
            res.data.data.playCount = Math.round(res.data.data.playCount / 10000) + '万'
          }
          that.setData({
            mvDeatil: res.data.data
          })
          that.getSinger(res.data.data.artistId)
        }
      }
    })
  },
  /* 获取歌手信息 */
  getSinger(id) {
    let that = this
    wx.request({
      url: baseUrl + '/artists',
      data: {
        id: id
      },
      success(res) {
        if (res.data.code == 200) {
          console.log(res.data.artist)
          that.setData({
            singer: res.data.artist
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    this.getMvUrl(options.id)
    this.getMvDetail(options.id)
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