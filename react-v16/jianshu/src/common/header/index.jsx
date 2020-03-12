import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style.js'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
  }

  handleInputFoucs = () => {
    this.setState({
      focused: true
    })
  }
  handleInputBlur = () => {
    this.setState({
      focused: false
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe602;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition 
              timeout={200} 
              in={this.state.focused}
              classNames="slide"
              >
              {/* 入场 slide-enter  slide-enter-active */}
              {/* 出场 slide-exit  slide-enter-exit-active */}
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFoucs}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe63f;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe611;</span>
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header;