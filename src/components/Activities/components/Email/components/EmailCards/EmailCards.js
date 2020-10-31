import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CreateEmailCard from './components/CreateEmailCard';
import LogEmailCard from './components/LogEmailCard';
import CardContainer from '../../../../../Style/Card/Activity/Container';
import './EmailCards.scss';

function EmailCards(props) {
  const createCard = (card) => (<CreateEmailCard card={card} />);
  const logCard = (card) => (
    <LogEmailCard
      card={card}
      contact={props.contact}
      user={props.user}
      onChangeEmail={props.onChangeEmail}
      handleAddContact={props.handleAddContact}
      handleRemoveContact={props.handleRemoveContact}
    />
  );
  const icon = faEnvelope;
  return (
    <div className="emailCards">
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

export default EmailCards;
