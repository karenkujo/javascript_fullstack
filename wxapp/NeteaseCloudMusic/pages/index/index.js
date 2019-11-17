// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: 2,
    banners: '',
    songList: '',
    albums: ''
  },
  // 点击切换页面
  switchNav (e) {
    // console.log(e.target.dataset.id)
    this.setData({
      currentId: e.target.dataset.id
    })
  },
  // 滑动切换页面
  scollNav (e) {
    // console.log(e.detail.current)
    this.setData({
      currentId: e.detail.current
    })
  },
  // 轮播图
  getBanner () {
    let that = this
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/banner',
      success (res) {
        // console.log(res.data.banners)
        that.setData({
          banners: res.data.banners
        })
      }
    })
  },
  // 获取推荐歌单
  getsongList () {
    let that = this
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/personalized?limit=6',
      success (res) {
        // console.log(res.data.result)
        if (res.data.code == 200) {
          for (let item of res.data.result) {
            if (item.playCount >= 100000000) {
              let num  = item.playCount / 100000000
              item.playCount = num.toFixed(1) + '亿'
            }
            if (item.playCount >= 100000) {
              item.playCount = Math.round(item.playCount / 10000) + '万'
            }
          }
          that.setData({
            songList: res.data.result
          })
        }
      }
    })
  },
  // 获取新碟
  getAlbums () {
    let that = this
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/top/album?limit=3',
      success (res) {
        // console.log(res.data.albums)
        that.setData({
          albums: res.data.albums
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner()
    this.getsongList()
    this.getAlbums()
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