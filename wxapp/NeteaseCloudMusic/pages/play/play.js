// pages/play/play.js
const baseUrl = 'http://neteasecloudmusicapi.zhaoboy.com'
let durationNum = 0
let currentTimeNum = 0
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
    dragstate: false,
    playList: [],
    currentSong: 0,
    showList: false,
    maskDisplay: 'none',
    maskOpacity: 0,
    playState: ['icon-xunhuanbofang', 'icon-suijibofang-wangyiicon', 'icon-danquxunhuan']
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
        if (res.data.data[0].url == null) {
          that.nextSong()
          wx.showToast({
            title: '抱歉, 该歌曲没有版权',
            icon: 'none',
            duration: 800
          })
          return
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
          // console.log(res.data)
          that.setData({
            name: res.data.songs[0].name,
            picUrl: res.data.songs[0].al.picUrl,
            singer: res.data.songs[0].ar[0].name
          })
          wx.setStorageSync('name', res.data.songs[0].name)
          wx.setStorageSync('picUrl', res.data.songs[0].al.picUrl)
          wx.setStorageSync('singer', res.data.songs[0].ar[0].name)
          getApp().globalData.name = res.data.songs[0].name
          getApp().globalData.picUrl = res.data.songs[0].al.picUrl
          getApp().globalData.singer = res.data.songs[0].ar[0].name
          // console.log(that.data.name)
          that.getBackgroundAudioManager()  // 调用创建播放器方法
            .then((backgroundAudioManager) => {
              that.setData({
                backgroundAudioManager: backgroundAudioManager
              })
              wx.hideLoading()
              that.setProgress()
            })
        }
      }
    })
  },
  // 进度条
  setProgress() {
    let that = this
    let backgroundAudioManager = that.data.backgroundAudioManager
    let query = wx.createSelectorQuery()
    query.select('.progress-wrapper').boundingClientRect((rect) => {  // 获取进度条宽度
      // console.log(rect.width)
      if (rect) { // 防止在其他页面更换歌曲时渲染出错
        wx.setNavigationBarTitle({   // 实时设置页面头部标题
          title: that.data.name
        })
        backgroundAudioManager.onTimeUpdate(() => { // 监听音乐播放器数据更新
          let percent = backgroundAudioManager.currentTime / backgroundAudioManager.duration
          let left = Math.round(percent * rect.width)
          // console.log(left)
          let currentTime = that.formatTime(backgroundAudioManager.currentTime)
          durationNum = Math.round(backgroundAudioManager.duration)
          let duration = that.formatTime(backgroundAudioManager.duration)
          if (!that.data.dragstate) { //当进度条被拖动时不更新数据
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
      }
    }).exec()
  },
  // 拖动进度条
  dragStart(e) {
    let that = this
    that.setData({
      dragstate: true
    })
    let query = wx.createSelectorQuery()
    query.select('.progress-wrapper').boundingClientRect((rect) => {  // 获取进度条圆
      // console.log(e.touches[0].clientX - rect.left)
      let left = e.touches[0].clientX - rect.left
      let percent = left / rect.width
      currentTimeNum = Math.round(durationNum * percent)
      that.data.backgroundAudioManager.seek(currentTimeNum)
      that.setData({
        left: Math.round(left)
      })
    }).exec(() => {
      that.setData({
        dragstate: false
      })
    })
  },
  dragMove(e) {
    let that = this
    that.setData({
      dragstate: true
    })
    // console.log(e.detail.value)
    let query = wx.createSelectorQuery()
    let currentTime
    query.select('.progress-wrapper').boundingClientRect((rect) => {  // 获取进度条宽度
      // console.log(rect.width)
      let percent = e.detail.value / rect.width
      currentTimeNum = Math.round(durationNum * percent)
      currentTime = that.formatTime(durationNum * percent)
    }).exec(() => {
      that.setData({
        currentTime: currentTime,
      })
    })
  },
  dragEnd() {
    let that = this
    // console.log(currentTimeNum)
    that.data.backgroundAudioManager.seek(currentTimeNum)
    that.setData({
      dragstate: false
    })
  },
  // 格式化时间数据
  formatTime(num) {
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
      backgroundAudioManager.onEnded(function () { // 监听背景音频自然播放结束事件 
        let playList = wx.getStorageSync('playList')
        let currentSong = that.data.currentSong
        if (that.data.playState[0] === 'icon-danquxunhuan') { // 如果单曲循环的话再次播放，否则调用播放下一曲方法
          that.getMusicUrl(playList[currentSong].id)
        } else {
          that.nextSong()
        }
      })
      resolve(backgroundAudioManager)
      reject('创建失败')
    })
  },
  /* 上一曲 */
  preSong() {
    let that = this
    let playList = wx.getStorageSync('playList')
    let currentSong = that.data.currentSong
    let playState = that.data.playState
    if (playState[0] === 'icon-xunhuanbofang' || playState[0] === 'icon-danquxunhuan') {
      if (currentSong == 0) {
        that.getMusicUrl(playList[playList.length - 1].id)
        that.setData({
          currentSong: playList.length - 1,
          playList: playList
        })
        return
      }
      that.getMusicUrl(playList[currentSong - 1].id)
      that.setData({
        currentSong: currentSong - 1,
        playList: playList
      })
    } else if (playState[0] === 'icon-suijibofang-wangyiicon') {
      let currentSong = Math.floor(Math.random() * playList.length)
      that.getMusicUrl(playList[currentSong].id)
      that.setData({
        currentSong: currentSong,
        playList: playList
      })
    }
  },
  /* 下一曲 */
  nextSong() {
    let that = this
    let playList = wx.getStorageSync('playList')
    let currentSong = that.data.currentSong
    let playState = that.data.playState
    if (playState[0] === 'icon-xunhuanbofang' || playState[0] === 'icon-danquxunhuan') { // 列表循环或单曲循环
      if (currentSong == playList.length - 1) {
        that.getMusicUrl(playList[0].id)
        that.setData({
          currentSong: 0,
          playList: playList
        })
        return
      }
      that.getMusicUrl(playList[currentSong + 1].id)
      that.setData({
        currentSong: currentSong + 1,
        playList: playList
      })
    } else if (playState[0] === 'icon-suijibofang-wangyiicon') { // 随机播放
      let currentSong = Math.floor(Math.random() * playList.length)
      // console.log(currentSong)
      that.getMusicUrl(playList[currentSong].id)
      that.setData({
        currentSong: currentSong,
        playList: playList
      })
    }
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
  /* 展示播放列表 */
  showList() {
    let playList = wx.getStorageSync('playList')
    this.setData({
      playList: playList,
      showList: true,
      maskDisplay: 'block',
      maskOpacity: .5
    })
  },
  /* 隐藏播放列表 */
  hiddenList() {
    let that = this
    that.setData({
      showList: false,
      maskOpacity: 0
    })
    setTimeout(() => {
      that.setData({
        maskDisplay: 'none'
      })
    }, 500)
  },
  /* 播放列表选择播放 */
  play(e) {
    // console.log(e.currentTarget.dataset.index)
    let playList = wx.getStorageSync('playList')
    this.getMusicUrl(playList[e.currentTarget.dataset.index].id)
    this.setData({
      currentSong: e.currentTarget.dataset.index
    })
  },
  /* 改变播放顺序 */
  swichPlayState() {
    let playState = this.data.playState
    let splice = playState.splice(0, 1)
    playState = [...playState, ...splice]
    console.log(playState)
    this.setData({
      playState: playState
    })
    if (playState[0] === 'icon-xunhuanbofang') {
      wx.showToast({
        title: '列表循环',
        icon: 'none'
      })
    } else if (playState[0] === 'icon-suijibofang-wangyiicon') {
      wx.showToast({
        title: '随机播放',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '单曲循环',
        icon: 'none'
      })
    }
  },
  /* 监听属性变化 */
  watch: {
    currentSong(val, old) {
      if (val !== '') {
        // console.log(val)
        getApp().globalData.currentSong = val;
        wx.setStorageSync('currentSong', val)
        console.log(getApp().globalData.currentSong)
      }
    },
    playList(val, old) {
      if (val !== '') {
        // console.log(val)
        getApp().globalData.playList = val;
        wx.setStorageSync('playList', val)
        console.log(getApp().globalData.playList)
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   this.setData({
  //     id: options.id
  //   })
  //   this.getMusicUrl(options.id)
  // },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中'
    })
    let playList = wx.getStorageSync('playList')
    this.getMusicUrl(playList[0].id)
    this.setData({
      playList: playList,
      currentSong: 0
    })
    console.log(playList)
    getApp().watch(this.data, this.watch, this) // 调用app.js的监听属性方法
    getApp().globalData.play = this // 将当前页面作用域传到全局
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({   // 设置页面头部标题
      title: this.data.name
    })
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