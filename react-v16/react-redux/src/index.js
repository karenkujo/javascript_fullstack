import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList'
import { Provider } from 'react-redux'
import store from './store/index'

// Provider  连接器连接了store 那么Provider里面所有的组件都具备了使用store里面的内容的权力
const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));

