import React, { Component } from 'react';
import { List } from 'antd'
import { Link } from 'react-router-dom'

class Star extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          "createdAt": "2019-04-10 10:19",
          "updatedAt": "2019-04-10 10:19",
          "id": 3,
          "title": "React 16 加载性能优化指南",
          "url": "https://juejin.im/post/5b506ae0e51d45191a0d4ec9"
        },
        {
          "createdAt": "2019-03-30 14:02",
          "updatedAt": "2019-03-30 14:02",
          "id": 2,
          "title": "CentOS7 系统目录详解和常用命令[文件和目录]",
          "url": "https://blog.csdn.net/qq_22860341/article/details/81363655"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <List
          header="文章收藏"
          itemLayout="horizontal"
          dataSource={this.state.data}
          style={{backgroundColor: '#fff', paddingLeft: '30PX', paddingRight: '30px', paddingBottom: '30px'}}
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<a style={{color: '#1890ff', fontSize: 14}} href={item.url}>{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Star;