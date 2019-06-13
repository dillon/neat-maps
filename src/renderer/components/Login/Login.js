import React from 'react';
import { login } from './actions'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: {
        email: '',
        password: ''
      }
    }
  }

  handleFormChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      formInput: {
        ...prevState.formInput,
        [name]: value
      }
    }))
  }

  handleSubmit = (event) => {
    const { formInput: { email, password } } = this.state;
    const { dispatch } = this.props;
    dispatch(login({ email, password }))
    event.preventDefault()
  }

  render() {
    const { message } = this.props;
    const { formInput: { email, password } } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email: <input type="text" name="email" value={email} onChange={this.handleFormChange} />
          </label>
          <label htmlFor="password">
            Password: <input type="password" name="password" value={password} onChange={this.handleFormChange} />
          </label>
          <input
            type="submit"
            value="Submit"
            title="Login"
          />
        </form>
        <p>{message}</p>
      </div>
    )
  }
}