import React from 'react';
import './CreateTaskCard.scss';
import InputTaskType from './components/InputTaskType';
import TaskDescription from './components/TaskDescription';


class CreateTaskCard extends React.Component {
  constructor(props) {
    super(props);
    const { _id, description, assignedToUser} = this.props.card;
    this.state = {
      currentDate: this.props.card.date,
      currentTime: this.props.card.time,
      card:this.props.card,
      cardId: _id,
      description,
      userList: assignedToUser,
      taskType: this.props.card.taskType,
      priority: this.props.card.priority,
    }
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onPriorityChange = this.onPriorityChange.bind(this);
  }

  handleAddUser(userId){
    this.props.handleAddUser(userId, this.state.cardId);
  }

  handleDeleteUser(userId){
    this.props.handleDeleteUser(userId, this.state.cardId);
  }

  onDateChange(date) {
    let newCard = this.state.card;
    newCard.date = date;
    this.setState({
        currentDate: date,
        card: newCard,
    })
    this.props.onChangeTask(this.state.cardId,newCard)
  }

  onTimeChange(time) {
      let newCard = this.state.card;
      newCard.time = time;
      this.setState({
          currentTime: time,
          card: newCard,
      })
      this.props.onChangeTask(this.state.cardId, newCard)
  }

  onDescriptionChange(description){
      let newCard = this.state.card;
      newCard.description = description;
      this.setState({
          description: description,
          card: newCard,
      })
      this.props.onChangeTask(this.state.cardId, newCard)
  }

  onTypeChange(type){
    let newCard = this.state.card;
    newCard.type = type;
    this.setState({
      taskType: type,
      card: newCard,
    })
    this.props.onChangeTask(this.state.cardId, newCard)
  }

  onPriorityChange(priority){
    let newCard = this.state.card;
    newCard.priority = priority;
    this.setState({
      priority: priority,
      card: newCard,
    })
    this.props.onChangeTask(this.state.cardId, newCard)
  }

    render() {
      const { currentDate, currentTime, cardId, description, taskType, priority} = this.state;
        return (
          <div className="createTaskCard">
            <InputTaskType 
              currentDate={currentDate}
              currentTime={currentTime}
              onTimeChange={this.onTimeChange}
              onDateChange={this.onDateChange}
              taskType={taskType}
              priority={priority}
              onPriorityChange={this.onPriorityChange}
              onTypeChange={this.onTypeChange}
              handleAddUser={this.handleAddUser}
              handleDeleteUser={this.handleDeleteUser}
            />
            <div className="createTaskCard__footer">
            {description?
              <TaskDescription 
                cardId={cardId}
                description={description} 
                onContentChange = {this.onDescriptionChange} />
                : 
                ""
            } 
            </div>
          </div>
        )
    }
}

export default CreateTaskCard;