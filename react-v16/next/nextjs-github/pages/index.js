import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]

function makeEvent(type) {
  return (...arg) => {
    console.log(type, ...arg)
  }
}
events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})

export default () => {
  function gotoToTestB() {
    Router.push({
      pathname: '/test/b',
      query: {
        id: 2
      }
    }, '/test/b/2') // 第二个参数 路由映射
  }
  return (
    <>
      <span>Index</span>
    </>
  )
}