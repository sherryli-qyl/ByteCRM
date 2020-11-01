import React from 'react';
import './StageItem.scss';

const StageItem = ({
  className,
}) => {
  let stageClassName = 'stageItem ';

  if (className) {
    stageClassName += `stageItem--${className}`;
  }

  return (
    <div className={stageClassName} />
  );
};

export default StageItem;
