import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          exact
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          exact
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
