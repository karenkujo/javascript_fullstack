import React, { Component } from 'react';
import { Provider } from './context'

class HashRouter extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      }
    }
  }
  componentDidMount() {
    // 默认hash没有时，自动跳到 /
    window.location.hash = window.location.hash || '/'
    // 监听hash值变化，重新设置状态
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }
  render() {
    let value = {
      location: this.state.location
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

export default HashRouter;