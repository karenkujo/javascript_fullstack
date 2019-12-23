//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  observe(obj, key, fun, caller){
    var val = obj[key];
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      set(value) {
        // console.log('set ',key)
        val = value;
        fun.call(caller, value, val)
      },
      get() {
        return val;
      }
    })
  },

 // 监听特定data对象的属性变化
 // caller :保留this指针
  watch(data, watch, caller){
    Object.keys(watch).forEach(v => {
      this.observe(data, v, watch[v], caller);
    })
  },

  //app 全局属性监听
  watchAppData: function (method, caller) {
    var obj = this.globalData;
    Object.keys(obj).forEach((key) => {
      var val = obj[key]
      if (key == 'name') {
        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: true,
          set: function (value) {
            val = value
            console.log('setting')
            method.call(caller) // 改变this指向!!! 使其指向musicBar组件
          },
          get: function () {
            return val
          }
        })
      }
    })
  },
  playMusic () {
    let play = this.globalData.play // 获取play页面作用域
    // console.log(play)
    play.swichState()
    this.globalData.handleState = play.data.handleState
  },
  globalData: {
    userInfo: null,
    playList: [],
    currentSong: 0,
    name: '',
    picUrl: '',
    singer: '',
    play: null,
    handleState: true
  }
})