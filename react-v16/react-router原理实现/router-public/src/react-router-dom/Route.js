import React, { Component } from 'react';
import { Consumer } from './context'
const { pathToRegexp } = require("path-to-regexp");

class Route extends Component {
  render() {
    return (
      <Consumer>
        {state => {
          let { path, component: Component } = this.props
          let pathname = state.location.pathname
          // 根据path实现一个正则，通过正则匹配
          let reg = pathToRegexp(path, [], {end: false})
          let result = pathname.match(reg)
          if (result) {
            return <Component></Component>
          }
        }}
      </Consumer>
    );
  }
}

export default Route;