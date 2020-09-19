import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ActivityCard.scss';



const ActivityCard = (props) => (
    <div className='activityCard'>
        <div className='activityCard__container'>
            <div className="activityCard__container__icon">
               <FontAwesomeIcon icon={props.icon} />
            </div>
            <div className='activityCard__container__content'>
                <div className='cardHeader'>
                    <div className="cardHeader__title"> {props.title} </div>
                    <div className='cardHeader__timeStamp'>
                       Aug 30, 2020 at 12:08 AM GMT+10
                    </div> 
                </div>
                <div className='activityCard__container__content__body'>
                    {props.card}
                </div>
            </div>
        </div>
    </div>
)


export default ActivityCard;