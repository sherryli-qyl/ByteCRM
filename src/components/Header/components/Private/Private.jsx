import React from 'react';
import NavigationLink from '../../components/NavigationLink';
import './Private.scss';
import Profile from '../../../../img/Contact/profile.png';
import { withRouter } from "react-router";
import { isLoggedIn, removeToken } from '../../../../utils/auth';
import {
  CONTACT_BASE_URL,
  COMPANY_BASE_URL,
  LOGIN_URL,
  ABOUTUS_BASE_URL,
  CONTACTUS_BASE_URL

} from '../../../Routes/URLMap';

const logout = history => {
  removeToken();
  history.push(LOGIN_URL);
};

const Private = ({ history }) => {

  if (!isLoggedIn()) return null;

  return (
    <div className="Layout">
      <NavigationLink.Text indictable href="/login">
        <div onClick={() => logout(history)}>Sign Out</div>
      </NavigationLink.Text>
      <NavigationLink.Text indictable href="/">
        <img className="profile_nav" src={Profile} alt="profile" />
      </NavigationLink.Text>
    </div>
  );
};
export default withRouter (Private);
