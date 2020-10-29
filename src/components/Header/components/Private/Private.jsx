import React from 'react';
import './Private.scss';
import { withRouter } from 'react-router';
import Profile from '../../../../img/Contact/profile.png';
import { isLoggedIn, removeToken } from '../../../../utils/auth';
import {
  CONTACT_BASE_URL,
  LOGIN_URL,
} from '../../../Routes/URLMap';
import HeaderNavLink from '../HeaderNavLink';

const logout = (history) => {
  removeToken();
  history.push(LOGIN_URL);
};

const Private = ({ history }) => {
  if (!isLoggedIn()) return null;

  return (
    <div className="Layout">
      <HeaderNavLink path={LOGIN_URL}>
        <button className="private-nav">
          <div className="private-text" onClick={() => logout(history)}>Sign Out</div>
        </button>
      </HeaderNavLink>
      <HeaderNavLink path={CONTACT_BASE_URL}>
        <img className="profile_nav" src={Profile} alt="profile" />
      </HeaderNavLink>
    </div>
  );
};
export default withRouter(Private);
