import React from 'react';
import './CreateTaskCard.scss';
import TaskNameBar from './components/TaskNameBar';
import InputTaskType from './components/InputTaskType';
import TaskDescription from './components/TaskDescription';
import RotateArrow from '../../../../../../../RotateArrow'; 

class CreateTaskCard extends React.Component {
  constructor(props) {
    super(props);
    const { _id, description, assignedTo } = this.props.card;
    this.state = {
      card: this.props.card,
      cardId: _id,
      description,
      userList: assignedTo,
      showDetails: false,
    }
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggleDetails = this.handleToggleDetails.bind(this);
  }

  handleToggleDetails() {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }))
  }

  handleAddUser(userId) {
    this.props.handleAddUser(userId, this.state.cardId);
  }

  handleRemoveUser(userId) {
    this.props.handleRemoveUser(userId, this.state.cardId);
  }

  handleUpdate(value, key) {
    let newCard = this.state.card;
    newCard[key] = value;
    this.setState({
      card: newCard,
    })
    this.props.onChangeTask(this.state.cardId, newCard);
  }


  render() {
    const { card, showDetails } = this.state;

    const Body = () => (
      <React.Fragment>
        <div className='blockline'>
          <InputTaskType
            card={card}
            handleUpdate={this.handleUpdate}
            handleAddUser={this.handleAddUser}
            handleRemoveUser={this.handleRemoveUser}
          />
        </div>
        <TaskDescription
          description={card.description}
          handleUpdate={this.handleUpdate} />
      </React.Fragment>
    )

    return (
      <div className="createTaskCard">
        <div className="createTaskCard__name">
          <TaskNameBar status={card.status}
            handleUpdate={this.handleUpdate}>
            {card.name}
          </TaskNameBar>
        </div>
        {card.status === "complete" ?
          <div className="createTaskCard__details">
            <div className="createTaskCard__details__top" onClick={this.handleToggleDetails}>
                <RotateArrow className="createTaskCard__details__top__arrow" 
                             rotate = {showDetails}/>
              <span className="createTaskCard__details__top__label">
                Details
              </span>
            </div>
            {showDetails ?
              <div className="createTaskCard__details__bottom">
                <Body />
              </div>
              :
              ""
            }
          </div>
          :
          <Body />
        }
      </div>
    )
  }
}

export default CreateTaskCard;