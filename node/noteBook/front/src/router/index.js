import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/login/StarLogin'
import StarRefister from '@/components/register/StarRefister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记' // 配置当前路由的title
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎' // 配置当前路由的title
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: StarLogin,
      meta: {
        title: '登录' // 配置当前路由的title
      }
    },
    {
      path: '/StarRefister',
      name: 'StarRefister',
      component: StarRefister,
      meta: {
        title: '注册' // 配置当前路由的title
      }
    }
  ]
})