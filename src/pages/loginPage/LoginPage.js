import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
