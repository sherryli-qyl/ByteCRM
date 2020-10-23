import React from 'react';
import NavigationLink from '../../components/NavigationLink';
import './Public.scss';
import SmallLogo from '../../../../img/Logo/smalllogo.png';
//import { NavLink } from 'react-router-dom';


const Public = () => (
  <div className="Layout">
    <NavigationLink.Text indictable href="/">
      <img src={SmallLogo} alt="small logo" />
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/contacts">
      Contacts
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/companies">
      Companies
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/about">
      About
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/contactus">
      Contact Us
    </NavigationLink.Text>
  </div>
);

export default Public;
