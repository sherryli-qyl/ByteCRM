import React from 'react';
import NavigationLink from '../../components/NavigationLink';
import './Private.scss';
import Profile from '../../../../img/Contact/profile.png';


const Private = () => (
        <div className = "Layout">
          <NavigationLink.Text indictable href="/login">
            <div>Sign Out</div>
          </NavigationLink.Text>
          <NavigationLink.Text indictable href="/">
            <img className = "profile_nav" src= {Profile} alt = "profile" />
          </NavigationLink.Text>
        </div>
    );
export default Private;
