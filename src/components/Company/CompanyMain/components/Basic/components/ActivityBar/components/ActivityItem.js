import React from 'react';

import './ActivityItem.scss';

const ActivityItem = ({
  name,
  src,
  active,
  onClick,
  children,
}) => {
  let itemClassName = 'activity__item';
  const buttonClassName = 'activity__button';
  const iconClassName = 'activity__icon';
  const ActivityNameClassName = 'activity__name';

  if (active) {
    itemClassName += ' activity__item--active';
  }

  return (
    <div className={itemClassName}>
      <button
        className={buttonClassName}
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
      >
        <img className={iconClassName} src={src} alt={name} />
      </button>
      <div className={ActivityNameClassName}>
        {children}
      </div>
    </div>
  );
};

export default ActivityItem;
