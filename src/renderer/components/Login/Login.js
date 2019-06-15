import React from 'react';
import PropTypes from 'prop-types';
import { login } from './actions';
import styles from './styles';

class Login extends React.Component {
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
      <div style={styles.login}>
        <form onSubmit={this.handleSubmit} style={styles.login}>
          <label htmlFor="email" style={styles.row} >
            <span>Email: </span><input style={styles.input} type="text" name="email" value={email} onChange={this.handleFormChange} />
          </label>
          <label htmlFor="password" style={styles.row} >
            <span>Password: </span><input style={styles.input} type="password" name="password" value={password} onChange={this.handleFormChange} />
          </label>
          <input
            type="submit"
            value="Submit"
            title="Login"
            style={styles.button}
          />
        </form>
        <p style={styles.message}>{message}</p>
      </div>
    )
  }
}

Login.propTypes = {
  message: PropTypes.string.isRequired
}

export default Login;