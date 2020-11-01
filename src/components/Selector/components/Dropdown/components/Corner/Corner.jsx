import React from 'react';

import './Corner.scss';

const Corner = ({
  variant,
}) => {
  let className = 'dropdownCorner ';

  switch (variant) {
    case 'topLeft':
      className += 'dropdownCorner--topLeft';
      break;

    case 'middle':
      className += 'dropdownCorner--middle';
      break;

    case 'disable':
      className += 'dropdownCorner--disable';
      break;

    default:
      className += 'dropdownCorner--disable';
      break;
  }

  return (
    <div className={className} />
  );
};

export default Corner;
