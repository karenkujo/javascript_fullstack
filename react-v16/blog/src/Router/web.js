import loadable from '../utils/loadable'

const List = loadable(() => import('../pages/web/list/list'))
// const About = loadeable(() => import('../pages/web/about'))
const webRoutes = [
  {
    menu: true,
    icon: '<HomeOutlined />',
    title: '首页',
    path: '/web/index',
    component: List
  }
]

export default webRoutes