import React from 'react';
import Public from './components/Public';
import Private from './components/Private';
import './Header.scss';

const Header = () => (
<<<<<<< HEAD
  <div className="StyledHeader">
    <div className="Container">
      <div className="Layout">
        <div className="Left">
          <Public />
        </div>
        <div className="Right">
=======
  <div className = "styled_header">
    <div className = "styled_header__container">
      <div className = "layout">
        <div className = "left">
          <Public />
        </div>
        <div className = "right">
>>>>>>> fix navbar style
          <Private />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
