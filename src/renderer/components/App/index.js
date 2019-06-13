import React from 'react';
import { connect } from 'react-redux';
import App from './App';

const AppContainer = props => <App {...props} />

const mapStateToProps = ({ loginReducer: { account } }) => ({ account });

export default connect(mapStateToProps)(AppContainer);
