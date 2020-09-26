import React from 'react';
import NoteCard from './components/NoteCard';
import CardContainer from '../../../../../../Style/Card/Activity/Container';
import { faEdit } from "@fortawesome/free-solid-svg-icons";


function NoteCardsList(props) {
  const createCard = (card)=>(<NoteCard card={card}/>);
  const icon= faEdit;
  return (
    <div>
      {props.cardsArray.map((cards) => (
        <CardContainer
          key={cards.date}
          date={cards.date}  
          content={cards.content}
          icon = {icon}  
          createCard = {createCard}
          />
      ))}
    </div>
  )
}


export default NoteCardsList;