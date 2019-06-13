import fetch from 'isomorphic-fetch';
import { url } from '../../../../common/constants/apis/neat'

export const LOGIN_REQUEST = 'LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

const loginRequest = ({ message }) => ({
  type: LOGIN_REQUEST,
  payload: { message }
});
const loginFailure = ({ message = 'Login failed' }) => ({
  type: LOGIN_FAILURE,
  payload: { message }
});
const loginSuccess = ({ email, message = 'Login success. Redirecting...' }) => ({
  type: LOGIN_SUCCESS,
  payload: { email, message },
})

export const login = ({ email, password }) => (dispatch) => {
  dispatch(loginRequest({ message: 'checking credentials...' }))
  const queries = `?email=${email}&password=${password}`;
  return fetch(url + queries, { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      // eslint-disable-next-line no-shadow
      const { email, error } = data;
      if (email) return dispatch(loginSuccess({ account: email }))
      if (error) return dispatch(loginFailure({ message: error.message }))
      return dispatch(loginFailure({ message: error.message }))
    })
    .catch(({ message = 'login error' }) => dispatch(loginFailure({ message })))
};

export const logout = () => ({
  type: LOGOUT,
  message: 'logout success'
});

