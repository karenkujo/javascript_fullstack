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
    picUrl: '',
    singer: '',
    backgroundAudioManager: {},
    duration: '00:00',
    currentTime: '00:00',
    state: true
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
        that.getMusicDetail(id)
      }
    })
  },
  // 获取歌曲详情
  getMusicDetail(id) {
    let that = this
    wx.request({
      url: baseUrl + '/song/detail',
      data: {
        ids: id
      },
      success(res) {
        if (res.data.code === 200) {
          console.log(res.data)
          wx.setNavigationBarTitle({   // 设置页面头部标题
            title: res.data.songs[0].name
          })
          that.setData({
            name: res.data.songs[0].name,
            picUrl: res.data.songs[0].al.picUrl,
            singer: res.data.songs[0].ar[0].name
          })
          // console.log(that.data.name)
          that.setProgress()
        }
      }
    })
  },
  // 进度条
  setProgress() {
    let that = this
    that.getBackgroundAudioManager()  // 调用创建播放器方法
    .then((backgroundAudioManager) => {
      that.setData({
        backgroundAudioManager: backgroundAudioManager
      })
      backgroundAudioManager.onTimeUpdate(() => {
        that.setData({
          currentTime: Math.round(backgroundAudioManager.currentTime),
          duration: Math.round(backgroundAudioManager.duration)
        })
      })
    })
  },
  // 创建音乐播放器
  getBackgroundAudioManager() {
    let that = this
    return new Promise((resolve, reject) => {
      const backgroundAudioManager = wx.getBackgroundAudioManager()
      backgroundAudioManager.src = that.data.musicUrl
      backgroundAudioManager.title = that.data.name
      backgroundAudioManager.singer = that.data.singer
      resolve(backgroundAudioManager)
      reject('创建失败')
    })
  },
  // 播放暂停
  swichState() {
    let that = this
    that.setData({
      state: !that.data.state
    })
    let backgroundAudioManager = that.data.backgroundAudioManager
    if (that.data.state) {
      backgroundAudioManager.play()
    } else (
      backgroundAudioManager.pause()
    )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   id: options.id
    // })
    this.getMusicUrl(29122124)
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