import React, { Component } from 'react';
import avatar from '../../../assets/test.png'
import { Card, Tag, Divider } from 'antd'
import './index.less'
import { color } from '../../../utils/index'


class SideCustom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 1,
          "name": "Node"
        },
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 2,
          "name": "Vue"
        },
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 3,
          "name": "React"
        },
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 4,
          "name": "Koa"
        },
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 5,
          "name": "Nginx"
        },
        {
          "createdAt": "2019-03-31 15:54",
          "updatedAt": "2019-03-31 15:54",
          "id": 7,
          "name": "Mysql"
        },
        {
          "createdAt": "2019-03-31 15:54",
          "updatedAt": "2019-03-31 15:54",
          "id": 8,
          "name": "Sequelize"
        },
        {
          "createdAt": "2019-04-10 18:49",
          "updatedAt": "2019-04-10 18:49",
          "id": 9,
          "name": "JS"
        },
        {
          "createdAt": "2019-04-10 20:15",
          "updatedAt": "2019-04-10 20:15",
          "id": 10,
          "name": "less"
        },
        {
          "createdAt": "2019-04-10 20:15",
          "updatedAt": "2019-04-10 20:15",
          "id": 11,
          "name": "axios"
        },
        {
          "createdAt": "2019-04-10 20:16",
          "updatedAt": "2019-04-10 20:16",
          "id": 12,
          "name": "xshell"
        },
        {
          "createdAt": "2019-04-10 20:17",
          "updatedAt": "2019-04-10 20:17",
          "id": 13,
          "name": "es6"
        },
        {
          "createdAt": "2019-11-11 10:59",
          "updatedAt": "2019-11-11 10:59",
          "id": 14,
          "name": "Jenkins"
        }
      ],
      articleData: []
    }
  }
  render() {
    return (
      <div className="sider-container">
        <div className="admin-info">
          <header>
            <img src={avatar} title="karen" alt="avatar" />
          </header>
          <p className="admin-name">
            karen
          </p>
          <p className="admin-desc">
            唯有那份眩目，
            <br />
            未曾忘却。
          </p>
        </div>
        <div className="recent-article">
          <Card>
            <Divider orientation="left">最近文章</Divider>
            <ul className="recent-list">
              <li>summer pockets</li>
              <li>魔女恋爱日记</li>
              <li>纸上的魔法使</li>
              <li>苍之彼方的四重奏</li>
            </ul>
          </Card>
        </div>
        <div className="tags-wrapper">
          <Card>
            <Divider orientation="left">标签</Divider>
            <div className="tags-content">
              {
                this.state.tags.map(v => (
                  <Tag color={color[Math.floor(Math.random()*color.length)]} key={v.id}>{v.name}</Tag>
                ))
              }
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default SideCustom