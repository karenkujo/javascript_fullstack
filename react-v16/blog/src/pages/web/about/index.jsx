import React, { Component } from 'react';
import { Card, Divider } from 'antd'
import './index.less'
import { GithubOutlined } from '@ant-design/icons';

class About extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="about">
        <Card>
          <Divider orientation="left">Blog</Divider>
          <p>一直基于 vue 写业务，所以博客选用了 react + react-router + mbox 这套技术栈，借此熟悉下 react 开发模式</p>
          <p>纯函数式开发，很甜</p>
          <p>前端：react + antd + react-router + es6 + webpack + axios</p>
          <p>服务端：koa2 + mysql + sequelize</p>
          <p><span style={{backgroundColor: 'yellow'}}>源码戳这里</span></p>
          <p><a href="https://github.com/gzwgq222/blog-admin" target="_blank">web端</a></p>
          <p><a href="https://github.com/gzwgq222/blog-admin" target="_blank">node服务端</a></p>
          <Divider orientation="left">Me</Divider>
          <ul>
            <li>姓名：Gong Qiang</li>
            <li><GithubOutlined /> : <span><a href="https://github.com/gzwgq222" target="_blank">github</a></span></li>
            <li><span>联系方式：18174352598</span><Divider type="vertical"></Divider><a href="mailto:445722156@qq.com">445722156@qq.com</a></li>
            <li>坐标：深圳市</li>
            <li>学历专业：本科<Divider type="vertical"></Divider>医学</li>
            <li>skill：
              <ul>
                <li>前端：Vue、React、ES6/7/8、Echat、Axios</li>
                <li>服务端：Node、Koa2</li>
                <li>数据库：Mysql</li>
                <li>其他：webpack、git、nginx</li>
              </ul>
            </li>
          </ul>
        </Card>
      </div>
    );
  }
}

export default About;