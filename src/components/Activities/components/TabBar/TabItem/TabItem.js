import React from 'react';

import './TabItem.scss';

const TabItem = ({ 
  children, 
  active, 
  onClick,
}) => {
  let className = 'tabBar__item';

  if (active) {
    className += ' tabBar__item--active';
  }

  return (
    <button
      className={className} 
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default TabItem;
