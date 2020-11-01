import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import NoteCard from './components/NoteCard';
import CardContainer from '../../../../../Style/Card/Activity/Container';

function NoteCardsList(props) {
  const createCard = (card) => (
    <NoteCard
      card={card}
      relatedTo={props.relatedTo}
      onChangeNote={props.onChangeNote}
    />
  );
  const icon = faEdit;

  return (
    <div>
      {props.cardsArray.map((cards) => (
        <CardContainer
          key={cards.date}
          date={cards.date}
          content={cards.content}
          icon={icon}
          createCard={createCard}
          handleDeleteCard={props.handleDeleteNoteCard}
        />
      ))}
    </div>
  );
}

export default NoteCardsList;
