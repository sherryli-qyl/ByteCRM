import React from 'react';
import NavigationLink from '../../../UI/NavigationLink';
import './Public.scss';
// import Logo from '../../../img/Logo/logo.png';


const Public = () => (
  <div className = "Layout">
    <NavigationLink.Naked href="/">
      <div className = "Logo"> BYTECRM</div>    
      </NavigationLink.Naked>
    <div className = "Divider"></div>
    <NavigationLink.Text indictable href="/contacts">
      CONTACTS
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/companies">
      COMPANIES
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/about">
      ABOUT 
    </NavigationLink.Text>
  </div>
);

export default Public;
