/* eslint-disable no-tabs */
import React from 'react';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import CreateTaskCard from './components/CreateTaskCard';
import CardContainer from '../../../../../Style/Card/Activity/Container';
import './TaskCards.scss';

const TaskCards = ({
  assignedToUser,
  onChangeTask,
  handleAddUser,
  handleRemoveUser,
  cardsArray,
  handleDeleteCard,
}) => {
  const createCard = (card) => (
    <CreateTaskCard
      card={card}
      assignedToUser={assignedToUser}
      onChangeTask={onChangeTask}
      handleAddUser={handleAddUser}
      handleRemoveUser={handleRemoveUser}
    />
  );

  const icon = faTasks;
  return (
    <div className="taskCards">
      {cardsArray.map((cards) => (
        <CardContainer
          key={cards.date}
          date={cards.date}
          content={cards.content}
          icon={icon}
          createCard={createCard}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
    </div>
  );
};

TaskCards.propTypes = {
  assignedToUser: PropTypes.objectOf(PropTypes.object).isRequired,
  cardsArray: PropTypes.arrayOf(PropTypes.array).isRequired,
  onChangeTask: PropTypes.func.isRequired,
  handleAddUser: PropTypes.func.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  handleRemoveUser: PropTypes.func.isRequired,
};

export default TaskCards;
