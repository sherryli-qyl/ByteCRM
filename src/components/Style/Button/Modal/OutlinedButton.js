import React from 'react';
import './ButtonStyle.scss';

const OutLinedButton = ({
  children,
  className,
}) => (
  <button className={`outlinedButton ${className}`}>{children}</button>
);

export default OutLinedButton;
