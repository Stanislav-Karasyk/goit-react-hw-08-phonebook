import React, { Component } from 'react';

export default class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label
            type="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          >
            Name
            <input />
          </label>
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
