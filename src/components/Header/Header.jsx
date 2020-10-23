import React from 'react';
import Public from './components/Public';
import Private from './components/Private';
import './Header.scss';

const Header = () => (
  <div className = "StyledHeader">
    <div className = "Container">
      <div className = "Layout">
        <div className = "Left">
          <Public />
        </div>
        <div className = "Right">
          <Private />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
