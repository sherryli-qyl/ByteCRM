import React from 'react';
import './ActivityCard.scss';



const ActivityCard = (props) => (
    <div className='activityCard'>
        <div className='activityCard__container'>
            <div className='activityCard__container__header'>
                {props.title}
            </div>
            <div className='activityCard__container__body'>
                {props.card}
            </div>
        </div>
    </div>
)


export default ActivityCard;