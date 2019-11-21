let loadingNode = document.createElement('div')
loadingNode.style.backgroundColor = '#eee'
loadingNode.style.opacity = '0.6'
loadingNode.style.position = 'absolute'
loadingNode.style.left = 0
loadingNode.style.top = 0
loadingNode.style.right = 0
loadingNode.style.bottom = 0
function toggleLoading(el, binding) {
  if (binding.value) {
    el.appendChild(loadingNode)
  } else {
    el.contains(loadingNode) && el.removeChild(loadingNode)  // 判断el下是否有此节点  有的话就移除
  }
}

let plugin = {}
// Vue.use()
plugin.install = function(Vue) {
  Vue.directive('loading', {         // 自定义指令
    bind: function(el, binding) {  // 第一次绑定的时候, 只会调用一次
      console.log(el, binding)
      toggleLoading(el, binding)
    },
    update(el, binding) {       // 更新时调用
      toggleLoading(el, binding)
    }
  })
}
// vue 插件 提供全局的方法
// import VueLoading from 'vue-loading'
// Vue.use(VueLoading)
// 导出
// 通用 模块化 方案  UMD
if (typeof exports === 'object') {
  module.exports = plugin
} else {
  // window
  window.Vue.use(plugin)
}

// npm login
// npm publish