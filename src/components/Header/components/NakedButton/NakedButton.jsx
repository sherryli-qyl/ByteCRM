import { css } from 'styled-components';
import React from 'react';
import './NakedButton.scss';

const NakedButton = () => (
  <button className = "nakedbutton">
  ${(props) => {
    const style = {
      link: css`
        color: #008fb4;
      `,
    }[props.variant];

    return style;
  }}
  </button>
)

export default NakedButton;
