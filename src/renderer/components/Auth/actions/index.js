export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export const login = ({ account }) => ({
  type: LOGIN,
  payload: { account }
});

export const logout = () => ({
  type: LOGOUT
});

export const createUser = () => ({

})