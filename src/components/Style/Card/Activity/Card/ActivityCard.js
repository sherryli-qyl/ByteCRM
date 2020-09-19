import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimeStamp from '../../../Tag/Activity/TimeStamp';
import ControlBar from './components/ControlBar';
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
                        <TimeStamp date={props.date} dateTime ={props.dateTime}/>
                    </div>
                </div>
                <div className='hoverBar'>
                  <ControlBar/>
                </div>
                <div className='activityCard__container__content__body'>
                    {props.card}
                </div>
            </div>
        </div>
    </div>
)


export default ActivityCard;