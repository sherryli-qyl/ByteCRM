import React from 'react';
import './ButtonStyle.scss';

const ContainedButton = ({
  children,
  className,
}) => (
  <button className="containedButton--small">{children}</button>
);

export default ContainedButton;
