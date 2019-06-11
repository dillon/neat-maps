import { combineReducers } from 'redux';
import loginReducer from './components/Login/reducers';
// export default function reducer(state) { return state; }

export default combineReducers({
  loginReducer,
});
