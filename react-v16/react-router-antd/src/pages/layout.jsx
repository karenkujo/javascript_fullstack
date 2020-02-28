import React from 'react'
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Badge, Table } from 'antd'
import { Route, Link } from 'react-router-dom'
import { UserOutlined, DashOutlined, SmileOutlined } from '@ant-design/icons'

function DropMenu () {
  return (
    <Menu>
      <Menu.Item key="0">
        <a href="#">修改密码</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">退出登录</a>
      </Menu.Item>
    </Menu>
  )
}
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

function Table1 () {
  return <Table dataSource={dataSource} columns={columns} />
}

const { Header, Sider, Content, Footer} = Layout
class PageLayout extends React.Component {
  render () {
    return (
      <Layout>
        <Header style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
          <Row>
            <Col span={10}>React + Antd 实践</Col>
            <Col span={8}>
              <Input placeholder="请输入你想要的..."></Input>
            </Col>
            <Col span={6}>
              <Avatar style={{ backgroundColor: '#666', marginRight: 20}} icon={<UserOutlined />}></Avatar>
              <Dropdown overlay={DropMenu}>
                <a>Hi, karen</a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout style={{ position: "relative"}}>
          <Sider>
            <Menu defaultOpenKeys={['sub1']} mode="inline" style={{width: 256, height: '90vh', overflow: 'auto', minWidth: 200}}>
              <Menu.SubMenu key="sub1" title={<span><SmileOutlined></SmileOutlined>部分UI组件实践</span>}>
                <Menu.Item key="sub-1"><Link to="/table">表格展示1</Link></Menu.Item>
                <Menu.Item key="sub-2">标签页面1</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="sub2" title={<span><SmileOutlined></SmileOutlined>部分UI组件实践</span>}>
                <Menu.Item key="sub-3">表格展示2</Menu.Item>
                <Menu.Item key="sub-4">标签页面2</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>

          <Content style={{ marginLeft: '5%'}}>
            {/* 点击表格展示，路由/table，这里显示table组建的第一个表格 */}
            <Route path="/table" component={Table1}></Route>
          </Content>

          <Footer style={{boxSizing: "border-box", position: "absolute", bottom: 0, left: 256, textAlign: "center", right: 0}}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default PageLayout