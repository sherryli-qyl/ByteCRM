import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import './NavbarDropdown.scss';

const NavbarDropdown = ({ user }) => (
  <div className = "navBarDropdown">
    <div className = "navBarDropdown__corner"/>
    <Body user = {user}/>
    <Footer user = {user}/>
  </div>
  
);
export default NavbarDropdown;
