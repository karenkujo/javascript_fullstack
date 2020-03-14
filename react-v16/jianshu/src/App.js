import React from 'react';
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;