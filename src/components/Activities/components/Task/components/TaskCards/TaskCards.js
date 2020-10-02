import React from 'react';
import CreateTaskCard from './components/CreateTaskCard';
import CardContainer from '../../../../../Style/Card/Activity/Container';
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import "./TaskCards.scss";


function TaskCards(props) {
	const createCard = (card)=>(<CreateTaskCard card={card}/>);
	const icon= faTasks;
	return (
		<div className='taskCards'>
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

export default TaskCards;