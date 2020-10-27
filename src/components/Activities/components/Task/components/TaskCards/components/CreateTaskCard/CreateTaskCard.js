import React from 'react';
import './CreateTaskCard.scss';
import TaskNameBar from './components/TaskNameBar';
import InputTaskType from './components/InputTaskType';
import TaskDescription from './components/TaskDescription';


class CreateTaskCard extends React.Component {
  constructor(props) {
    super(props);
    const { _id, description, assignedTo } = this.props.card;
    this.state = {
      currentDate: this.props.card.date,
      currentTime: this.props.card.time,
      card: this.props.card,
      cardId: _id,
      description,
      userList: assignedTo,
      taskType: this.props.card.taskType,
      priority: this.props.card.priority,
    }
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleAddUser(userId) {
    this.props.handleAddUser(userId, this.state.cardId);
  }

  handleDeleteUser(userId) {
    this.props.handleDeleteUser(userId, this.state.cardId);
  }

  handleUpdate(value,key){
    console.log(value);
    console.log(key);
    let newCard = this.state.card;
    newCard[key] = value;
    this.setState({
      card:newCard,
    })
    this.props.onChangeTask(this.state.cardId, newCard);
  }


  render() {
    const { card, cardId, description } = this.state;
    console.log(card)

    return (
      <div className="createTaskCard">
        <div className="createTaskCard__name">
          <TaskNameBar status={card.status}
                       handleUpdate = {this.handleUpdate}>
            {card.name}
          </TaskNameBar>
        </div>
        <div className='blockline'>
          <InputTaskType
            card={card}
            handleUpdate = {this.handleUpdate}
            handleAddUser={this.handleAddUser}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>     
          <TaskDescription
            cardId={cardId}
            description={description}
            handleUpdate = {this.handleUpdate} /> 
      </div>
    )
  }
}

export default CreateTaskCard;