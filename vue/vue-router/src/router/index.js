import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import Mine2 from '@/components/Mine2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      children: [
        {
          path: 'mine2',
          name: '',
          component: Mine2
        }
      ]
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
