import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import { actionCreators } from './store'


class Write extends Component {
  render () {
    if (this.props.loginStatus) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.login.get('login')
})

export default connect(mapState, null)(Write)