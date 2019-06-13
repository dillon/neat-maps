import React from 'react';
import { login } from '../actions'

export default props => {
  const { dispatch, message, account } = props;
  const email = 'dpett122@gmail.com'
  const password = 'dillon'
  return (
    <div>
      <button
        type="submit"
        onClick={() => dispatch(login({ email, password }))}
        title="Login"
      >Login</button>
      <p>{message}</p>
    </div>

  )
}