import React from 'react';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import AuthNav from '../authNav/AuthNav';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
