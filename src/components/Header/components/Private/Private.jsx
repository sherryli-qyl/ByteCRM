import React from 'react';
import './Private.scss';
import Profile from '../../../../img/Contact/profile.png';
import { withRouter } from "react-router";
import { isLoggedIn, removeToken } from '../../../../utils/auth';
import {
  CONTACT_BASE_URL,
  LOGIN_URL,
} from '../../../Routes/URLMap';
import { NavLink } from 'react-router-dom';

const logout = history => {
  removeToken();
  history.push(LOGIN_URL);
};

const Private = ({ history }) => {

  if (!isLoggedIn()) return null;

  return (
    <div className="Layout">
      <NavLink className="private-link" activeClassName="active" to={LOGIN_URL}>
        <button className="private-nav">
          <div className="private-text" onClick={() => logout(history)}>Sign Out</div>
        </button>
      </NavLink>
      <NavLink className="private-link" activeClassName="selected" to={CONTACT_BASE_URL}>
        <img className="profile_nav" src={Profile} alt="profile" />
      </NavLink>
    </div>
  );
};
export default withRouter(Private);
