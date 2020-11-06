import React from 'react';
import CreateMeetingCard from './components/CreateMeetingCard';
import LogMeetingCard from './components/LogMeetingCard';
import CardContainer from '../../../../../Style/Card/Activity/Container';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./MeetingCards.scss";


function MeetingCards(props) {
    const createCard = (card)=>(<CreateMeetingCard card={card}
                                                   user={props.user}
                                                   contact = {props.contact}
                                                   onChangeMeeting = {props.onChangeMeeting}/>);
    const logCard =(card)=>(<LogMeetingCard card={card}
                                            contact = {props.contact}
                                            user={props.user}
                                            onChangeMeeting = {props.onChangeMeeting}
                                            handleAddContact = {props.handleAddContact}
                                            handleRemoveContact = {props.handleRemoveContact}/>);
    const icon= faCalendarAlt;
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
                    handleDeleteCard = {props.handleDeleteCard}
                    />
            ))}
        </div>
    )
}

export default MeetingCards;