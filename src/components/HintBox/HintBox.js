import React from 'react';
import './HintBox.scss';

const HintBox = ({
  children,
  variant, // bottomRight,topRight
}) => {
  let position = 'bottomRight';
  if (variant) {
    position = variant;
  }

  return (
    <div className="hintBox">
      <div className={`hintBox__corner hintBox__corner--${position}`} />
      <div className="hintBox__text">
        {children}
      </div>
    </div>
  );
};

export default HintBox;
