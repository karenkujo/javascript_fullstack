// pages/play/play.js
const baseUrl = 'http://localhost:3000'
let startX = 0
let leftX = 0
let durationNum = 0
let currentTimeNum = 0
let progressWidth = 0
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
    state: true,
    handleState: true,
    left: 0,
    dragstate: false
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
      let query = wx.createSelectorQuery()
      query.select('.progress-wrapper').boundingClientRect((rect) => {  // 获取进度条宽度
        // console.log(rect.width)
        progressWidth = rect.width
        backgroundAudioManager.onTimeUpdate(() => { // 监听音乐播放器数据更新
          let percent = backgroundAudioManager.currentTime / backgroundAudioManager.duration
          let left = Math.round(percent * rect.width)
          let currentTime = that.formatTime(backgroundAudioManager.currentTime)
          durationNum = Math.round(backgroundAudioManager.duration)
          let duration = that.formatTime(backgroundAudioManager.duration)
          if (!that.data.dragstate) {
            that.setData({
              currentTime: currentTime,
              duration: duration,
              left: left
            })
          }
          percent = null
          left = null
          currentTime = null
          duration = null
        })
      }).exec()
    })
  },
  // 拖动进度条
  dragStart (e) {
    // console.log(e.touches[0].clientX)
    startX = e.touches[0].clientX
    leftX = this.data.left
    this.setData({
      dragstate: true
    })
  },
  dragMove (e) {
    let that = this
    // console.log(e.touches[0].clientX)
    let endX = e.touches[0].clientX
    let diffX = endX - startX
    // console.log(diffX + leftX)
    let left = leftX + diffX
    if (left < 0) {
      left = 0
    } else if (left > 240.4) {
      left = 240.4
    }
    let query = wx.createSelectorQuery()
    let currentTime
      query.select('.progress-wrapper').boundingClientRect((rect) => {  // 获取进度条宽度
        // console.log(rect.width)
        let percent = left / rect.width
        currentTimeNum = Math.round(durationNum * percent)
        currentTime = that.formatTime(durationNum * percent)
    }).exec(() => {
      that.setData({
        currentTime: currentTime,
        left: Math.round(left)
      })
    })
  },
  dragEnd () {
    let that = this
    // console.log(currentTimeNum)
    that.data.backgroundAudioManager.seek(currentTimeNum)
    that.setData({
      dragstate: false
    })
  },
  // 点击进度条跳转
  skip (e) {
    let that = this
    // console.log(e)
    that.setData({
      dragstate: true
    })
    let left = that.data.left
    let query = wx.createSelectorQuery()
    query.select('.progress-circle').boundingClientRect((rect) => {  // 获取进度条圆
      // console.log(e.touches[0].clientX - rect.left)
      left = e.touches[0].clientX - rect.left + left
      let percent = left / progressWidth
      currentTimeNum = Math.round(durationNum * percent)
      that.data.backgroundAudioManager.seek(currentTimeNum)
      that.setData({
        left: left
      })
    }).exec(() => {
      that.setData({
        dragstate: false
      })
    })
  },
  // 格式化时间数据
  formatTime (num) {
    let min = Math.floor(Math.round(num) / 60)
    let sec = Math.round(num) % 60
    return `${(Array(2).join(0) + min).slice(-2)}:${(Array(2).join(0) + sec).slice(-2)}`
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
  // 播放器状态 过渡动画
  swichState() {
    let that = this
    that.setData({
      handleState: !that.data.handleState
    })
    let time = 300
    if (that.data.handleState) {
      time = 0
    }
    setTimeout(() => {
      that.setData({
        state: !that.data.state
      })
      let backgroundAudioManager = that.data.backgroundAudioManager
      if (that.data.state) {
        backgroundAudioManager.play()
      } else {
        backgroundAudioManager.pause()
      }
    }, time)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getMusicUrl(options.id) //29122124
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