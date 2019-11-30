Page({
  data: {
    navData: [],
    currentTab: 0,
    cart: '',
    navScrollLeft: 0,
    windowWidth: 0,
    isLoading: true,
    address: '范家新村',
    destination: '万达'
  },
  onLoad () {
    this.requestCart()
    var w = wx.getSystemInfoSync().windowWidth
    this.setData({
      windowWidth: w
    })
  },
  // 一个请求一个函数
  requestCart() {
    wx.request({
      url: 'http://localhost:3000/indexPage',
      success: (res) => {
        // console.log(this)
        // console.log(res.data)
         console.log(res);
        const navData = res.data.navData;
        const imgUrls = res.data.imgUrls;
        // const cost = res.data.data.cost
        // console.log(navData)
        this.setData({
          navData,
          imgUrls,
          // cost
        })
      }
    })
  },
  switchNav (event) {
    const cart = event.currentTarget.dataset.name
    let text = this.data.navData
    const cur = event.currentTarget.dataset.current
    var singleNavWidth = this.data.windowWidth / 6
    this.setData({
      cart,
      currentTab: cur,
      navScrollLeft: (cur - 1) * singleNavWidth
    })
  }
})
