import React from 'react';
import RouterContext from './RouterContext';

const Link = ({
  to,
  children,
  className,
}) => (
  <RouterContext.Consumer>
    {(router) => (
      <a
        href={to}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          router.push(to);
        }}
      >
        {children}
      </a>
    )}
  </RouterContext.Consumer>
);

export default Link;
