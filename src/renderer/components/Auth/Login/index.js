import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';


const LoginContainer = (props) => <Login className="App" {...props} />

const mapStateToProps = ({ authReducer: { account, message } }) => ({ account, message })

export default connect(mapStateToProps)(LoginContainer)
