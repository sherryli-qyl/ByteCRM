import React from 'react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import CreateMeetingCard from './components/CreateMeetingCard';
import LogMeetingCard from './components/LogMeetingCard';
import CardContainer from '../../../../../../Style/Card/Activity/Container';
import './MeetingCards.scss';

function MeetingCards(props) {
  const createCard = (card) => (<CreateMeetingCard card={card} />);
  const logCard = (card) => (
    <LogMeetingCard
      card={card}
      contactData={props.contactData}
      onChangeMeeting={props.onChangeMeeting}
    />
  );
  const icon = faCalendarAlt;
  return (
    <div className="meetingCards">
      {props.cardsArray.map((cards) => (
        <CardContainer
          key={cards.date}
          date={cards.date}
          content={cards.content}
          icon={icon}
          createCard={createCard}
          logCard={logCard}
          handleDeleteCard={props.handleDeleteCard}
        />
      ))}
    </div>
  );
}

export default MeetingCards;
