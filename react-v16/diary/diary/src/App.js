import React from 'react';
import Home from './Home'
import Detail from './Detail'
import Edit from './Edit'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const RouterMap = () => {
  return <Router>
    {/* Switch 和 js 中的 switch差不多，只做一次，匹配到了就不再进行了 */}
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/detail">
        <Detail />
      </Route>
      <Route exact path="/edit">
        <Edit />
      </Route>
    </Switch>
  </Router>
}

export default RouterMap;
