// pages/songSheet/songSheet.js
const baseUrl = 'http://localhost:3000'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: 0,
    recSongList: [],
    chiSongList: [],
    japSongList: [],
    acgSongList: []
  },
  // 点击切换页面
  switchNav(e) {
    // console.log(e.target.dataset.id)
    this.setData({
      currentId: e.target.dataset.id
    })
  },
  // 滑动切换页面
  scollNav(e) {
    // console.log(e.detail.current)
    this.setData({
      currentId: e.detail.current
    })
  },
  /* 获取推荐歌单 */
  getRecSongSheet() {
    let that = this
    wx.request({
      url: baseUrl + '/personalized',
      success(res) {
        // console.log(res.data.result)
        if (res.data.code == 200) {
          for (let item of res.data.result) {
            if (item.playCount >= 100000000) {
              let num = item.playCount / 100000000
              item.playCount = num.toFixed(1) + '亿'
            }
            if (item.playCount >= 100000) {
              item.playCount = Math.round(item.playCount / 10000) + '万'
            }
          }
          that.setData({
            recSongList: res.data.result
          })
        }
      }
    })
  },
  /* 获取华语歌单 */
  getChiSongSheet() {
    let that = this
    wx.request({
      url: baseUrl + '/top/playlist?limit=30&cat=华语',
      success(res) {
        // console.log(res.data.playlists)
        if (res.data.code == 200) {
          for (let item of res.data.playlists) {
            if (item.playCount >= 100000000) {
              let num = item.playCount / 100000000
              item.playCount = num.toFixed(1) + '亿'
            }
            if (item.playCount >= 100000) {
              item.playCount = Math.round(item.playCount / 10000) + '万'
            }
          }
          that.setData({
            chiSongList: res.data.playlists
          })
        }
      }
    })
  },
  /* 获取日语歌单 */
  getJapSongSheet() {
    let that = this
    wx.request({
      url: baseUrl + '/top/playlist?limit=30&cat=日语',
      success(res) {
        // console.log(res.data.playlists)
        if (res.data.code == 200) {
          for (let item of res.data.playlists) {
            if (item.playCount >= 100000000) {
              let num = item.playCount / 100000000
              item.playCount = num.toFixed(1) + '亿'
            }
            if (item.playCount >= 100000) {
              item.playCount = Math.round(item.playCount / 10000) + '万'
            }
          }
          that.setData({
            japSongList: res.data.playlists
          })
        }
      }
    })
  },
  /* 获取ACG歌单 */
  getAcgSongSheet() {
    let that = this
    wx.request({
      url: baseUrl + '/top/playlist?limit=30&cat=ACG',
      success(res) {
        // console.log(res.data.playlists)
        if (res.data.code == 200) {
          for (let item of res.data.playlists) {
            if (item.playCount >= 100000000) {
              let num = item.playCount / 100000000
              item.playCount = num.toFixed(1) + '亿'
            }
            if (item.playCount >= 100000) {
              item.playCount = Math.round(item.playCount / 10000) + '万'
            }
          }
          that.setData({
            acgSongList: res.data.playlists
          })
        }
      }
    })
  },
  /* 查看歌单详情 */
  songSheetDetail(e) {
    // console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../songSheetDetail/songSheetDeatil?id=' + id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRecSongSheet()
    this.getChiSongSheet()
    this.getJapSongSheet()
    this.getAcgSongSheet()
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