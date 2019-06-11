import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './rootReducer';

export default createStore(reducer, compose(
  applyMiddleware(thunkMiddleware)
));