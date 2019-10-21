Page({
  data: {
    markers: [],
    longitude: 115.830278,//经度
    latitude: 28.718637,//纬度
    scale: 18,
  },
  tocreateMarkers (longitude, latitude) {
    let markers = [{
      "id": 1,
      "iconPath": "/images/map-bicycle.png",
      "latitude": latitude,
      "longitude": longitude,
      "width": 52.5,
      "height": 30,
      "callout": {}
    }]
    this.setData({
      markers
    })
  },
  onLoad () {
    // 微信赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中'
    })
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        // console.log(res)
        let { longitude, latitude} = res
        // console.log(longitude, latitude)
        this.tocreateMarkers(longitude, latitude)
        this.setData({
          longitude,
          latitude
        },() => {
          wx.hideLoading()
        })
      },
      fail: () => {},
      complete: () => {}
    });
  },
  onReady () {
    // 地图上下文环境
    this.mapCtx = wx.createMapContext('myMap')
  },
  toVisit (e) {
    console.log(e)
  },
  toScan () {
    return wx.scanCode({
      success: (res) => {
        // console.log(res)
        wx.showModal({
          title: 'scan',
          content: JSON.stringify(res)
        })
      }
    })
  },
  toUser () {},
  toMsg () {}, 
  toReset () {
    // 当你使用地图来来去去的， 再回到当初的起点
    this.mapCtx.moveToLocation()
  },
})