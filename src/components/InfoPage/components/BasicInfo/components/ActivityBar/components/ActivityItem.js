import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ActivityItem.scss';

const ActivityItem = ({
    name,
    icon,
    active,
    onClick,
    children
}) => {
    return (
        <div className='activity__item'>
            <button className='activity__item__button'
                onClick={(event) => {
                    event.preventDefault();
                    onClick();
                }}
            >
                <FontAwesomeIcon className='activity__item__button__icon'  icon={icon} />
            </button>
            <div className='activity__item__name'>
                {children}
            </div>
        </div>
    );
};

export default ActivityItem;