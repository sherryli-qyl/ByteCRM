import React from 'react';
import NavigationLink from '../../../UI/NavigationLink';
import './Public.scss';
import Logo from '../../../img/Logo/logo.png';


const Public = () => (
  <div className = "Layout">
    <NavigationLink.Naked href="/">
      <img className = "Logo" src = {Logo} alt= "logo" /> 
    </NavigationLink.Naked>
    <div className = "Divider"></div>
    <NavigationLink.Text indictable href="/contacts">
      Contact
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/companies">
      Company
    </NavigationLink.Text>
  </div>
);

export default Public;
