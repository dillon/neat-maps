import { LOGIN, LOGOUT } from '../actions';

const initialState = {
  account: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, account: action.payload.account };
    case LOGOUT:
      return { ...state, account: null };
    default:
      return state;
  }
};
