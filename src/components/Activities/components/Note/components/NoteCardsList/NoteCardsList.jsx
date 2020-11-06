import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import NoteCard from './components/NoteCard';
import CardContainer from '../../../../../Style/Card/Activity/Container';

function NoteCardsList(props) {
  const {
    relatedTo, onChangeNote, cardsArray, handleDeleteNoteCard,
  } = props;
  const icon = faEdit;
  const createCard = (card) => (
    <NoteCard
      card={card}
      relatedTo={relatedTo}
      onChangeNote={onChangeNote}
    />
  );

  return (
    <div>
      {cardsArray.map((cards) => (
        <CardContainer
          key={cards.date}
          date={cards.date}
          content={cards.content}
          icon={icon}
          createCard={createCard}
          handleDeleteCard={handleDeleteNoteCard}
        />
      ))}
    </div>
  );
}

export default NoteCardsList;
