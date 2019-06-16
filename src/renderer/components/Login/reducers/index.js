import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions';

export const initialState = {
  account: '',
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        message: action.payload.message
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        message: action.payload.message
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        account: action.payload.account,
        message: action.payload.message
      };
    case LOGOUT:
      return {
        ...state,
        account: '',
        message: action.payload.message
      };
    default:
      return state;
  }
};
