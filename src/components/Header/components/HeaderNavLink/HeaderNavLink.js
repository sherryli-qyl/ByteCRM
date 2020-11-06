import React from 'react';
import './HeaderNavLink.scss';

const HeaderNavLink = ({
  children,
  path,
}) => (
  <div className="headerNavLinkWrapper">
    <a href={path} className="headerNavLinkWrapper__link">
      {children}
    </a>
  </div>
);

export default HeaderNavLink;
