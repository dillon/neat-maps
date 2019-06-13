import React from 'react';
import Home from '../Home'
import Login from '../Login'

const App = props => {
  console.log(props)
  const { account } = props;
  if (account) return <Home />
  return <Login />
}

export default App
