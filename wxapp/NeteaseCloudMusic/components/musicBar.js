// components/musicBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    musicImgUrl: '',
    musicName: '',
    musicSinger: '',
    handleState: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData () {
      console.log('getData')
      getApp().globalData.currentSong = wx.getStorageSync('currentSong')
      getApp().globalData.playList = wx.getStorageSync('playList')
      let musicName = wx.getStorageSync('name')
      let musicImgUrl = wx.getStorageSync('picUrl')
      let musicSinger = wx.getStorageSync('singer')
      console.log(musicName, musicSinger)
      console.log(this.data)
      this.setData({
        musicName: musicName,
        musicImgUrl: musicImgUrl,
        musicSinger: musicSinger
      })
    },
    play () {
      let playList = [...new Set(getApp().globalData.playList)]
      console.log(playList)
      let currentSong = getApp().globalData.currentSong
      let preSongs = playList.splice(0, currentSong)
      playList = [...playList, ...preSongs]
      wx.setStorageSync('playList', playList)
      wx.setStorageSync('currentSong', 0)
      console.log(playList)
      wx.navigateTo({
        url: '/pages/play/play'
      })
    },
    swichState () {
      getApp().playMusic()
      this.setData({
        handleState: getApp().globalData.handleState
      })
    }
  }
})
