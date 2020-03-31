import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
// import Comp from '../components/comp'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
// import moment from 'moment';

const Comp = dynamic(import('../components/comp'))

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

const color = '#113366'

const A = ({ router, name, time }) => (
  <div>
    <Title>this is Title {time}</Title>
    <Comp />
    <Link href="#aaa">
      <a className="link">{router.query.id}{name}</a>
    </Link>
    <style jsx>{`
      a {
        color: bule;
      }
      .link {
        color: ${color};
      }
    `}</style>
  </div>
)

A.getInitialProps = async (ctx) => { // 没有跳来A页面  这里不会执行
  const moment = await import('moment')
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'wn',
        time: moment.default(Date.now() -60 * 1000).fromNow()
      })
    }, 1000)
  })
  return await promise
}

export default withRouter(A)