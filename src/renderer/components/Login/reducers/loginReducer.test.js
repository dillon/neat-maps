import reducer, { initialState } from './index'
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actions'


describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState
    )
  })

  it('should handle LOGIN_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: LOGIN_REQUEST,
        payload: { message: 'Run the request tests' }
      })
    ).toEqual(
      {
        account: '',
        message: 'Run the request tests'
      }
    )
  })

  it('should handle LOGIN_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: LOGIN_FAILURE,
        payload: { message: 'Run the failure tests' }
      })
    ).toEqual(
      {
        ...initialState,
        message: 'Run the failure tests'
      }
    )
  })

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: LOGIN_SUCCESS,
        payload: {
          account: 'test@email.com',
          message: 'Run the success tests'
        }
      })
    ).toEqual(
      {
        account: 'test@email.com',
        message: 'Run the success tests'
      }
    )
  })

  it('should handle LOGOUT', () => {
    const loggedInState = { ...initialState, account: 'logout@email.com' }
    expect(
      reducer(loggedInState, {
        type: LOGOUT,
        payload: {
          message: 'Run the logout tests'
        }
      })
    ).toEqual(
      {
        ...initialState,
        message: 'Run the logout tests'
      }
    )
  })
})

