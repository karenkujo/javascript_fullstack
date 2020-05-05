import React from 'react';
import Home from './Home'
import Detail from './Detail'
import Edit from './Edit'
import Tabbar from './Tabbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const RouterMap = (props) => {
  return <Router>
    {/* Switch 和 js 中的 switch差不多，只做一次，匹配到了就不再进行了 */}
    <Switch>
      <Route exact path="/">
        <Home />
        <Tabbar />
      </Route>
      <Route exact path="/detail">
        <Detail />
      </Route>
      <Route exact path="/edit">
        <Edit />
        <Tabbar />
      </Route>
    </Switch>
  </Router>
}

export default RouterMap;
