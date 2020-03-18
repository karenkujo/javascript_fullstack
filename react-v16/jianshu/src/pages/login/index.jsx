import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { Redirect } from 'react-router-dom'
// import { actionCreators } from './store'
import { 
  LoginWrapper,
  LoginBox,
  LoginInput,
  Button
} from './style'

class Login extends Component {
  render () {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginInput placeholder="账号" ref={(input) => this.account = input} />
            <LoginInput placeholder="账号" type="password" ref={(input) => this.password = input} />
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.login.get('login')
})

const mapDispatch = (dispatch) => ({
  login (accountElement, passwordElement) {
    const action = actionCreators.login(accountElement.vaule, passwordElement.value)
    action(dispatch)
  }
})

export default connect(mapState, mapDispatch)(Login)