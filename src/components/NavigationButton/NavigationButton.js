import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationButton.scss';

const NavigationButton = ({
  children,
  path,
  id,
}) => (
  <div className="navigationButtonWrapper">
    <button
      className="navigationButtonWrapper__btn"
      onClick={(event) => {
        event.preventDefault();
        sessionStorage.setItem('id', id);
      }}
    >
      <NavLink
        className="navigationButtonWrapper__btn__link"
        to={{
          pathname: path,
        }}
      >
        {children}
      </NavLink>
    </button>
  </div>
);

export default NavigationButton;
