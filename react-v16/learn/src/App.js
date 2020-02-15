import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div>
        <div>hello {this.props.name}</div>, i am {9 + 9} years old
      </div>
    )
  }
}

export default App