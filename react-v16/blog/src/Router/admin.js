import loadeable from '../utils/loadable'

const Home = loadeable(() => import('../pages/admin/home'))
const routes = [
  {
    menu: true,
    icon: 'home',
    title: '首页',
    path: '/admin/page',
    component: Home
  }
]

export default routes