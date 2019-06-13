import React from 'react';
import { connect } from 'react-redux';
import CreateAccount from './CreateAccount';


const CreateAccountContainer = (props) => <CreateAccount className="App" {...props} />

// const mapStateToProps = ({ authReducer: { account } }) => ({ account })

export default connect()(CreateAccountContainer)
