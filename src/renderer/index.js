import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Login from "./components/Login";
import App from './components/App'

function root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>

  );
}

export default root;