import React from 'react';
import Profile from '../../../../../img/Contact/profile.png';
import HeaderNavLink from '../../HeaderNavLink';
import { LOGIN_URL } from '../../../../Routes/URLMap';
import { isLoggedIn, removeToken } from '../../../../../utils/auth';
import './DropdownItems.scss';

const logout = (history) => {
  removeToken();
  history.push(LOGIN_URL);
};


const DropdownItems = ({user}) => {
 
  

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
        <HeaderNavLink path={LOGIN_URL}>
          <button onClick={(event)=>{
            event.preventDefault();
            localStorage.removeItem('user');
            localStorage.removeItem('AUTH_TOKEN');
            // logout(history)
          }}>
            Sign Out
          </button>
        </HeaderNavLink>
      </div>
    </div>
  );
};

export default DropdownItems;
