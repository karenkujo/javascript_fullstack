import React from 'react'
import { Form, Input, Card, Message, Button } from 'antd'
import './index.less'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import Particles from 'reactparticles.js'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    sessionStorage.setItem('blogUser', 'karen')
    sessionStorage.setItem('menuItemKey', '0')
    this.props.history.push('/web/index')
  }

  render () {
    return (
      <div className="login">
        <Particles id="particles1" config="particles1.json" height="90%" />
        <Card className="login-form" style={{width: 300, borderRadius: 4}}>
          <Form onFinish={this.handleSubmit}>
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名'}]}>
              <Input prefix={<UserOutlined style={{color: 'rgba(0, 0, 0, 0.25)'}} />} placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入密码'}]}>
              <Input prefix={<LockOutlined style={{color: 'rgba(0, 0, 0, 0.25)'}} />} placeholder="请输入密码" />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="Login-form-button" block>Login</Button>
          </Form>
        </Card>
      </div>
    )
  }
}

// const Login = Form.create({ name: 'normal_login' })(login)

export default Login