import React from 'react';
import CreateMeetingCard from './components/CreateMeetingCard';
import LogMeetingCard from './components/LogMeetingCard';
import CardContainer from '../../../../../../Style/Card/Activity/Container';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./MeetingCards.scss";


function MeetingCards(props) {
    const createCard = (card)=>(<CreateMeetingCard card={card}/>);
    const logCard =(card)=>(<LogMeetingCard card={card}/>);
    const icon= faEnvelope;
    return (
        <div className='meetingCards'>
            {props.cardsArray.map((cards) => (
                <CardContainer
                    key={cards.date}
                    date={cards.date}
                    content={cards.content}
                    icon = {icon}  
                    createCard = {createCard}
                    logCard = {logCard}
                    />
            ))}
        </div>
    )
}

export default MeetingCards;