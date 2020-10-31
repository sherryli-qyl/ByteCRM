import React from 'react';
import Body from '../../../private/LogEmailMain';
import Footer from './components/Footer';
import Header from './components/Header';

import './LogEmailCard.scss';

class LogEmailCard extends React.Component {
  constructor(props) {
    super(props);
    const { _id, description, contacts } = this.props.card;
    this.state = {
      currentDate: this.props.card.date,
      currentTime: this.props.card.time,
      card: this.props.card,
      cardId: _id,
      description,
      contactList: contacts,
      showDeleteModal: false,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }

  handleAddContact(contactId) {
    this.props.handleAddContact(contactId, this.state.cardId);
  }

  handleDeleteContact(contactId) {
    this.props.handleRemoveContact(contactId, this.state.cardId);
  }

  onDateChange(date) {
    const newCard = this.state.card;
    newCard.date = date;
    this.setState({
      currentDate: date,
      card: newCard,
    });
    this.props.onChangeEmail(this.state.cardId, newCard);
  }

  onTimeChange(time) {
    const newCard = this.state.card;
    newCard.time = time;
    this.setState({
      currentTime: time,
      card: newCard,
    });
    this.props.onChangeEmail(this.state.cardId, newCard);
  }

  onDescriptionChange(description) {
    const newCard = this.state.card;
    newCard.description = description;
    this.setState({
      description,
      card: newCard,
    });
    this.props.onChangeEmail(this.state.cardId, newCard);
  }

  render() {
    const {
      currentDate, currentTime, cardId, description, contactList,
    } = this.state;
    const { user, contact } = this.props;
    return (
      <div className="logEmailCard">
        {description
          ? (
            <Header
              cardId={cardId}
              description={description}
              onContentChange={this.onDescriptionChange}
            />
          )
          : ''}
        <div className="blockline">
          <Body
            contactList={contactList}
            contact={contact}
            userId={user.id}
            currentDate={currentDate}
            currentTime={currentTime}
            handleAddContact={this.handleAddContact}
            handleDeleteContact={this.handleDeleteContact}
            onTimeChange={this.onTimeChange}
            onDateChange={this.onDateChange}
          />
        </div>
        <Footer userName={this.props.card.user.fullName} />
      </div>
    );
  }
}

export default LogEmailCard;
