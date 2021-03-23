import React, { Component } from 'react';

export default class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Register Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          >
            Email
            <input />
          </label>
          <label
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          >
            Password
            <input />
          </label>
        </form>
      </div>
    );
  }
}
