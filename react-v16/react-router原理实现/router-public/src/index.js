import React, { Component } from 'react';
import { render } from 'react-dom'
import { HashRouter as Router, Route } from './react-router-dom'
import Home from './Home'
import Profile from './Profile'
import User from './User'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Router>
        <div>
         <Route path="/home" component={Home}></Route>
         <Route path="/profile" component={Profile}></Route>
         <Route path="/user" component={User}></Route>
        </div>
      </Router>
    );
  }
}

export default App;

render(<App />, window.root)