import { combineReducers } from 'redux';
import loginReducer from './components/Login/reducers';
import fileUploadReducer from './components/FileUpload/reducers';
// export default function reducer(state) { return state; }

export default combineReducers({
  loginReducer,
  fileUploadReducer
});
