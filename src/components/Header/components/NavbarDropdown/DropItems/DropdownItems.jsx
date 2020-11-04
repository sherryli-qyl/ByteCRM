import React from 'react';
import Profile from '../../../../../img/Contact/profile.png';
import HeaderNavLink from '../../HeaderNavLink';
import { LOGIN_URL } from '../../../../Routes/URLMap';
import { isLoggedIn, removeToken, removeUser } from '../../../../../utils/auth';
import history from '../../../../Routes/components/History';
import './DropdownItems.scss';

const logout = (history) => {
  removeToken();
  history.push(LOGIN_URL);
};

const DropdownItems = ({ user }) => {
  return (
    <div className="dropdownItems_wrapper">
      <div className="profile_info">
        <div className="user_profile">
          <img src={Profile} alt="profile" />
        </div>
        <div className="user_name">
          <p>{user.fullName}</p>
        </div>
        <div className="user_email">
          <p>{user.email}</p>
        </div>
        <div className="preference">
          <p>Profile & Preferences</p>
        </div>
      </div>
      <div className="sign_out_wrapper">
        <button className="navButton" onClick={(event) => {
          
          removeUser();
          removeToken();
         
        }}>
          <a href={LOGIN_URL}>
            Sign Out
          </a>
        </button>
      </div>
    </div>
  );
};

export default DropdownItems;
