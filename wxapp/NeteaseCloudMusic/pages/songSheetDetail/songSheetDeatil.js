// pages/songSheetDetail/songSheetDeatil.js
const baseUrl = 'http://neteasecloudmusicapi.zhaoboy.com'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    songSheetDetail: {},
    rankList: [
      "云音乐新歌榜",
      "云音乐热歌榜",
      "网易原创歌曲榜",
      "云音乐飙升榜",
      "云音乐电音榜",
      "UK排行榜周榜",
      "美国Billboard周榜",
      "KTV嗨榜",
      "iTunes榜",
      "Hit FM Top榜",
      "日本Oricon周榜",
      "韩国Melon排行榜周榜",
      "韩国Mnet排行榜周榜",
      "韩国Melon原声周榜",
      "中国TOP排行榜(港台榜)",
      "中国TOP排行榜(内地榜)",
      "香港电台中文歌曲龙虎榜",
      "华语金曲榜",
      "中国嘻哈榜",
      "法国 NRJ EuroHot 30周榜",
      "台湾Hito排行榜",
      "Beatport全球电子舞曲榜",
      "云音乐ACG音乐榜",
      "云音乐说唱榜",
      "云音乐古典音乐榜",
      "云音乐电音榜",
      "抖音排行榜",
      "新声榜",
      "云音乐韩语榜",
      "英国Q杂志中文版周榜",
      "电竞音乐榜",
      "云音乐欧美热歌榜",
      "云音乐欧美新歌榜",
      "说唱TOP榜"
    ]
  },
  /* 获取歌单详情 */
  getsongSheetDetail(id) {
    let that = this
    wx.request({
      url: baseUrl + '/playlist/detail',
      data: {
        id: id
      },
      success(res) {
        console.log(res.data)
        if (res.data.code == 200) {
          that.setData({
            songSheetDetail: res.data.playlist
          })
          wx.hideLoading()
        }
      }
    })
  },
  /* 获取排行榜详情 */
  getRankDetail(name) {
    let that = this
    let idx = that.data.rankList.indexOf(name)
    if (idx == -1) {
      wx.showToast({  // 若无此榜单数据则弹出提示框并返回主页
        title: '该榜单未完善',
        icon: 'none',
        duration: 4000
      })
      setTimeout(() => {
        wx.redirectTo({
          url: '../index/index'
        })
      }, 3000);
      return
    }
    wx.request({
      url: baseUrl + '/top/list',
      data: {
        idx: `${idx}`
      },
      success (res) {
        // console.log(res.data)
        if (res.data.code == 200) {
          that.setData({
            songSheetDetail: res.data.playlist
          })
          wx.hideLoading()
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 4000
          })
          setTimeout(() => {
            wx.redirectTo({
              url: '../index/index'
            })
          }, 3000);
          return
        }
      }
    })
  },
  /* 获取专辑详情 */
  getAlbumDetail (id) {
    let that = this
    wx.request({
      url: baseUrl + '/album',
      data: {
        id: id
      },
      success (res) {
        if (res.data.code == 200) {
          console.log(res.data)
          let album = res.data.album
          let songSheetDetail = {}
          songSheetDetail.coverImgUrl = album.picUrl
          songSheetDetail.name = album.name
          songSheetDetail.creator = {}
          songSheetDetail.creator.avatarUrl = album.artist.picUrl
          songSheetDetail.creator.nickname = album.artist.name
          songSheetDetail.description = album.description
          songSheetDetail.tracks = res.data.songs
          that.setData({
            songSheetDetail: songSheetDetail
          })
          wx.hideLoading()
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
   /* 添加歌曲到播放列表 */
   addPlayList (e) {
    let songs = [...new Set(this.data.songSheetDetail.tracks)]
    let currentSong = songs.splice(e.currentTarget.dataset.index, 1)[0]
    let playList = wx.getStorageSync('playList')
    playList = [...playList, currentSong]
    wx.setStorageSync('playList', playList)
    getApp().globalData.playList = playList
    wx.showToast({
      title: '添加到播放列表成功',
      icon: 'none',
      duration: 2000
    })
  },
  /* 去播放音乐界面 */
  play(e) {
    let songs = [...new Set(this.data.songSheetDetail.tracks)]
    let currentSong = songs.splice(e.currentTarget.dataset.index, 1)[0]
    songs = [currentSong, ...songs]
    wx.setStorageSync('playList', songs)
    wx.navigateTo({
      url: '../play/play'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.name)
    wx.showLoading({
      title: '加载中'
    })
    if (options.id) {
      this.getsongSheetDetail(options.id)
      console.log(options.id)
    }
    if (options.name) {
      this.getRankDetail(options.name)
    }
    if (options.albumId) {
      this.getAlbumDetail(options.albumId)
    }
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