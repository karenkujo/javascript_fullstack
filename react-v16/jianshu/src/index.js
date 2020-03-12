import React from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style.js';
import App from './App';
import { IconGlobalstyle } from './statics/iconfont/iconfont.js'


ReactDOM.render(
  <div>
    <Globalstyle />
    <IconGlobalstyle />
    <App />
  </div>,
  document.getElementById('root')
);