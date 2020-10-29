import React from 'react';
import './CreateTaskCard.scss';
import TaskNameBar from './components/TaskNameBar';
import InputTaskType from './components/InputTaskType';
import TaskDescription from './components/TaskDescription';


class CreateTaskCard extends React.Component {
  constructor(props) {
    super(props);
    const { _id, description, assignedTo} = this.props.card;
    this.state = {
      card: this.props.card,
      cardId: _id,
      description,
      userList: assignedTo,
    }
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleAddUser(userId) {
    this.props.handleAddUser(userId, this.state.cardId);
  }

  handleRemoveUser(userId) {
    this.props.handleRemoveUser(userId, this.state.cardId);
  }

  handleUpdate(value,key){
    let newCard = this.state.card;
    newCard[key] = value;
    this.setState({
      card:newCard,
    })
    this.props.onChangeTask(this.state.cardId, newCard);
  }


  render() {
    const {card} = this.state;

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
            handleRemoveUser={this.handleRemoveUser}
          />
        </div>     
          <TaskDescription
            description={card.description}
            handleUpdate = {this.handleUpdate} /> 
      </div>
    )
  }
}

export default CreateTaskCard;