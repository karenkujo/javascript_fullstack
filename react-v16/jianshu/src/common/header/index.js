import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as LoginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style'

const Header = (props) => {
  const { login, logout } = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left">
          <a href="/" className="active">首页</a>
        </NavItem>
        <NavItem className="left">下载App</NavItem>
        {
          login ?
            <NavItem className="right" onClick={logout}>退出</NavItem> :
            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
        }
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={200}
            in={props.focused}
            classNames="slide"
          >
            {/* slide-enter slide-enter-active  slide-exit slide-exit-active */}
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.bandleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Link to="/write">
          <Button className="writting">
            <span className="iconfont">&#xe7c2;</span>写文章
            </Button>
        </Link>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    login: state.login.get('login')
  }
}
// store.dispatch ===> props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    bandleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    logout() {
      dispatch(LoginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)