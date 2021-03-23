import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsPage from '../pages/contactsPage/ContactsPage';
import HomePage from '../pages/homePage/HomePage';
import LoginPage from '../pages/loginPage/LoginPage';
import RegisterPage from '../pages/registerPage/RegisterPage';
import AuthNav from './authNav/AuthNav';

const App = () => {
  return (
    <>
      <AuthNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
    </>
  );
};

export default App;
