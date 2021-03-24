import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ContactsPage from '../pages/contactsPage/ContactsPage';
import HomePage from '../pages/homePage/HomePage';
import LoginPage from '../pages/loginPage/LoginPage';
import RegisterPage from '../pages/registerPage/RegisterPage';
import { getCurrentUser } from '../redux/auth/auth-operations';
import AppBar from './appBar/AppBar';

class App extends Component {
  componentDidMount(){
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
