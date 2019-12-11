// pages/songSheetDetail/songSheetDeatil.js
const baseUrl = 'http://localhost:3000'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songSheetDetail: {}
  },
  /* 获取歌单详情 */
  getsongSheetDetail(id) {
    let that = this
    wx.request({
      url: baseUrl + '/playlist/detail',
      data: {
        id: id
      },
      success (res) {
        console.log(res.data)
        if (res.data.code == 200) {
          that.setData({
            songSheetDetail: res.data.playlist
          })
        }
      }
    }) 
  },
  /* 获取歌曲url */
  // getsongList (ids) {
  //   let that = this
  //   let idsArr = []
  //   for (let item of ids) {
  //     idsArr.push(item.id)
  //   }
  //   let idsStr = idsArr.join(',')
  //   wx.request({
  //     url: baseUrl + '/song/url',
  //     data: {
  //       id: idsStr
  //     },
  //     success (res) {
  //       console.log(res.data.data)
  //       if (res.data.code == 200) {
  //         that.setData({
  //           songsList: res.data.data
  //         })
  //       }
  //     }
  //   })
  // },
  // 去播放音乐界面
  play (e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../play/play?id=' + id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getsongSheetDetail(options.id)
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