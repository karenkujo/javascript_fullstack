// pages/play/play.js
const baseUrl = 'http://localhost:3000'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    musicUrl: '',
    name: '',
    picUrl: ''
  },
  // 获取歌曲详情
  getMusicDetail (id) {
    let that = this
    wx.request({
      url: baseUrl + '/song/detail',
      data: {
        ids: id
      },
      success (res) {
        if (res.data.code === 200) {
          console.log(res.data)
          wx.setNavigationBarTitle({   // 设置页面头部标题
            title: res.data.songs[0].name  
          })
          that.setData({
            name: res.data.songs[0].name,
            picUrl: res.data.songs[0].al.picUrl
          })
          console.log(that.data.picUrl)
        }
      }
    })
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
          // console.log(res.data)
          that.setData({
            musicUrl: res.data.data[0].url
          })
        }
        that.getBackgroundAudioManager()
      }
    })
  },
  // 创建音乐播放器
  getBackgroundAudioManager() {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.src = this.data.musicUrl
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   id: options.id
    // })
    this.getMusicUrl(29122124)
    this.getMusicDetail(29122124)
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