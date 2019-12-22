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
    musicSinger: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData () {
      this.setData({
        musicImgUrl: wx.getStorageSync('picUrl'),
        musicName: wx.getStorageSync('name'),
        musicSinger: wx.getStorageSync('singer')
      })
      getApp().globalData.currentSong = wx.getStorageSync('currentSong')
      getApp().globalData.playList = wx.getStorageSync('playList')
      console.log(getApp().globalData.playList)
    },
    play () {
      let playList = [...new Set(getApp().globalData.playList)]
      let currentSong = getApp().globalData.currentSong
      let preSongs = playList.splice(0, currentSong)
      playList = [...playList, ...preSongs]
      wx.setStorageSync('playList', playList)
      console.log(playList)
      wx.navigateTo({
        url: '/pages/play/play'
      })
    }
  }
})
