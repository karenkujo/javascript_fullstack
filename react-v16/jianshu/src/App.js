import React from 'react';
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;