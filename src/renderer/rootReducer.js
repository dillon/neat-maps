import { combineReducers } from 'redux';
import authReducer from './components/Auth/reducers';
// export default function reducer(state) { return state; }

export default combineReducers({
  authReducer,
});
