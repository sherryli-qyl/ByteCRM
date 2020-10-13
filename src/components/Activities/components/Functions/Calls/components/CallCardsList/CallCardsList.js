import React from 'react';
import NoteCard from './components/NoteCard';
import CardContainer from '../../../../../../Style/Card/Activity/Container';
import { faEdit } from "@fortawesome/free-solid-svg-icons";


function NoteCardsList(props) {
  const createCard = (card)=>(<NoteCard card={card}/>);
  const logCard =(card)=>(<NoteCard card={card}/>);
  const icon= faEdit;
  return (
    <div className='emailCards'>
      {props.cardsArray.map((cards) => (
        <CardContainer
          key={cards.date}
          date={cards.date}
          author={cards.author}
          content={cards.content}
          comments={cards.comments}
          icon = {icon}  
          createCard = {createCard}
          logCard = {logCard}
          />
      ))}
    </div>
  )
}


export default NoteCardsList;