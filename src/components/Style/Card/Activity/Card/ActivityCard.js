import React from 'react';
import './ActivityCard.scss';



const ActivityCard = (props) => (

    <div className='activityCard__container'>
       {props.card}
    </div>
)


export default ActivityCard;