import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './RotateArrow.scss';

const RotateArrow = ({
  rotate,
  className,
}) => {
  let arrowClassName = `${className} rotateArrow `;
  if (rotate) {
    arrowClassName += 'rotateArrow--rotate';
  }

  return (
    <div className={arrowClassName}>
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
};

export default RotateArrow;
