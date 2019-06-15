import React from 'react';
import PropTypes from 'prop-types';
import Home from '../Home'
import Login from '../Login'

const App = props => {
  const { account } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 50 }}>
      {account ?
        <Home />
        : <Login />
      }
    </div>
  )
}

App.propTypes = {
  account: PropTypes.string.isRequired
}

export default App
