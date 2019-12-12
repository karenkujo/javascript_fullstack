import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/pages/A'
import Parent from '@/components/views/parent'
import Show from '@/components/form/show'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/A',
      name: 'A',
      component: A
    },
    {
      path: '/Parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/Show',
      name: 'Show',
      component: Show
    },
    {
      path: '/Display',
      name: 'Display',
      component: Display
    }
  ]
})
