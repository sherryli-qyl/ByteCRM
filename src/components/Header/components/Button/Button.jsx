import  { css } from 'styled-components';
import NakedButton from '../NakedButton';
import React from 'react';
import './Button.scss';

   const Button = () => (
  <button> 
    <NakedButton />
    ${(props) => props.width && css`width: ${props.width};`}

  ${(props) => {
    const style = {
      small: css`
        padding: 8px 18px;
        font-size: 14px;
      `,
      medium: css`
        padding: 12px 18px;
        font-size: 16px;
      `,
      large: css`
        padding: 16px 18px;
        font-size: 18px;
      `,
    }[props.size || 'medium'];

    return style;
  }}

  ${(props) => {
    const style = {
      primary: css`
        background: #e0446d;
        color: white;
      `,
      secondary: css`
        background: #f5f8fd;
        color: #008fb4;
      `,
      success: css`
        background: #7db343;
        color: white;
      `,
    }[props.variant];

    return style;
  }}

  ${(props) => props.disabled && css`
    cursor: not-allowed;
    filter: grayscale(0.3);
  `}
  </button>
);

export default Button;
