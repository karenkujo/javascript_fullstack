// pages/search/search.js
const baseUrl = 'http://localhost:3000'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotSearch: [],
    query: '',
    songCount: 0,
    songs: [],
    showsuggest: false
  },

  // 获取热门搜索
  getHotSearch () {
    let that = this
    wx.request({
      url: baseUrl + '/search/hot/detail',
      success (res) {
        if (res.data.code === 200) {
          // console.log(res.data.result.hots)
        }
        that.setData({
          hotSearch: res.data.result.hots
        })
      }
    })
  },
  // 获取搜索建议
  getSuggest (query) {
    let that = this
    wx.request({
      url: baseUrl + '/search',
      data: {
        keywords: query
      },
      success (res) {
        if (res.data.code === 200) {
          // console.log(res.data.result.songCount)
          // console.log(res.data.result.songs)
          that.setData({
            songCount: res.data.result.songCount,
            songs: res.data.result.songs
          })
        }
      }
    })
  },
  // 搜索事件
  onChange (e) {
    let that = this
    if(e.detail == '') {
      that.setData({
        showsuggest: false
      })
      return
    }
    if (e.detail) {
      that.data.query = e.detail
    }
    that.setData({
      showsuggest: true
    })
    that.getSuggest(that.data.query)
  },
  // 去播放音乐界面
  play (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../play/play?id=' + id
    })
  },
  // 点击热门搜索
  onSearchBox (e) {
    // console.log(e.currentTarget.dataset.name)
    this.setData({
      query: e.currentTarget.dataset.name
    })
    this.onChange(e.currentTarget.dataset.name)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotSearch ()
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