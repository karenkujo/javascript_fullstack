// pages/index/index.js
const baseUrl = 'http://localhost:3000'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: 1,
    banners: [],
    songList: [],
    albums: [],
    newSongs: [],
    rank: [],
    singerList: [],
    MvList: [],
    sideShow: false,
    maskOpacity: 0,
    maskDisplay: 'none',
    sideData: [
      {
        iconClass: 'icon-fujinderen',
        text: '附近的人'
      },
      {
        iconClass: 'icon-yanchu',
        text: '演出'
      },
      {
        iconClass: 'icon-dingshitingzhibofang',
        text: '定时停止播放'
      },
      {
        iconClass: 'icon-zaixiantinggemianliuliang',
        text: '在线听歌免流量'
      },
      {
        iconClass: 'icon-shezhi',
        text: '设置'
      }
    ]
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
  // 显示侧边栏
  showSide () {
    let that = this
    that.setData({
      sideShow: true,
      maskOpacity: 0.3,
      maskDisplay: 'block'
    })
  },
  // 隐藏侧边栏
  hiddenSide () {
    let that = this
    that.setData({
      sideShow: false,
      maskOpacity: 0
    })
    setTimeout(() => {
      that.setData({
        maskDisplay: 'none'
      })
    }, 400)
  },
  // 轮播图
  getBanner () {
    let that = this
    wx.request({
      url: baseUrl + '/banner',
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
      url: baseUrl + '/personalized?limit=6',
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
  // 获取新歌
  getSongs () {
    let that = this
    wx.request({
      url: baseUrl + '/personalized/newsong',
      success (res) {
        // console.log(res.data.result)
        that.setData({
          newSongs:res.data.result
        })
      }
    })
  },
  // 获取新碟
  getAlbums () {
    let that = this
    wx.request({
      url: baseUrl + '/top/album?limit=3',
      success (res) {
        // console.log(res.data)
        that.setData({
          albums: res.data.albums
        })
      }
    })
  },
  // 获取排行榜
  getRank () {
    let that = this
    wx.request({
      url: baseUrl + '/toplist/detail',
      success (res) {
        // console.log(res.data.list)
        that.setData({
          rank: res.data.list
        })
      }
    })
  },
  // 获取歌手
  getSinger () {
    let that = this
    wx.request({
      url: baseUrl + '/top/artists',
      success (res) {
        // console.log(res.data.artists)
        that.setData({
          singerList: res.data.artists
        })
      }
    })
  },
  // 获取最新mv
  getMvList () {
    let that = this
    wx.request({
      url: baseUrl + '/mv/first',
      success (res) {
        // console.log(res.data.data)
        that.setData({
          MvList: res.data.data
        })
      }
    })
  },
  // 去排行榜页面
  toRank () {
    this.setData({
      currentId: 2
    })
  },
  // 去歌单页面
  toSongSheet () {
    wx.redirectTo({
      url: '../songSheet/songSheet'
    })
  },
  // 去每日推荐页面
  toDateRecommend () {
    wx.redirectTo({
      url: '../dateRecommend/dateRecommend'
    })
  },
  // 去搜索界面
  toSearch () {
    wx.redirectTo({
      url: '../search/search'
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
    this.getBanner()
    this.getsongList()
    this.getAlbums()
    this.getSongs()
    this.getRank()
    this.getSinger()
    this.getMvList ()
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