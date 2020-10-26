import React from 'react';
import CreateTaskCard from './components/CreateTaskCard';
import CardContainer from '../../../../../Style/Card/Activity/Container';
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import "./TaskCards.scss";


function TaskCards(props) {
	const createCard = (card)=>(<CreateTaskCard card={card}
																							getRelatedTo = {props.getRelatedTo}
																							user={props.user}
																							onChangeTask = {props.onChangeTask}
																							handleAddUser = {props.handleAddUser}
																							handleRemoveUser= {props.handleRemoveUser} />);
	const icon= faTasks;
	return (
		<div className='taskCards'>
			{props.cardsArray.map((cards) => (
				<CardContainer
					key={cards.date}
					date={cards.date}
					content={cards.content}
					icon={icon}  
					createCard={createCard}
					handleTest={props.handleTest}
          handleDeleteCard={props.handleDeleteCard}
				/>
			))}
		</div>
	)
}

export default TaskCards;