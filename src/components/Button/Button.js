import React from 'react';
import './ButtonStyle.scss';

const Button = ({
    children,
    size, // large,small
    variant, // contained,outlined
    btnDisable,
    onClick,
}) => {
    const className = `button button--${variant} button--${size}`;

    return (
      <button
        className={className}
        disabled={btnDisable}
        onClick={(event) => {
                event.preventDefault();
                onClick();
             }}
      >
        {children}
      </button>
    );
};

export default Button;
