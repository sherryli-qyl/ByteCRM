<<<<<<< HEAD
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
=======
import React from "react";
import "./Private.scss";
import Profile from "../../../../img/Contact/profile.png";
import { withRouter } from "react-router";
import { isLoggedIn, removeToken } from "../../../../utils/auth";
import { CONTACT_BASE_URL, LOGIN_URL } from "../../../Routes/URLMap";
import HeaderNavLink from "../HeaderNavLink";
>>>>>>> fix navbar style

const logout = (history) => {
  removeToken();
  history.push(LOGIN_URL);
};

const Private = ({ history }) => {
  if (!isLoggedIn()) return null;

  return (
    <div className="right_wrapper">
      <div className="sign_out_wrapper">
        <HeaderNavLink path={LOGIN_URL}>
          <button className="private-nav">
            <div className="private-text" onClick={() => logout(history)}>
              Sign Out
            </div>
          </button>
        </HeaderNavLink>
      </div>
      <div className="profile_wrapper">
        {/* <HeaderNavLink path={CONTACT_BASE_URL}> */}
        <div className="profile_nav">
          <img src={Profile} alt="profile" />
        </div>
        {/* </HeaderNavLink> */}
      </div>
    </div>
  );
};
export default withRouter(Private);
