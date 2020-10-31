import React from 'react';
import './LogMeetingCard.scss';
import Body from '../../../../private/LogMeetingMain';
import Header from './components/Header';

class LogMeetingCard extends React.Component {
  constructor(props) {
    super(props);
    const { _id, description, contacts } = this.props.card;
    this.state = {
      currentDate: this.props.card.date,
      currentTime: this.props.card.time,
      meetingDuration: this.props.card.duration,
      card: this.props.card,
      cardId: _id,
      description,
      contactList: contacts,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onDurationChange = this.onDurationChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onDateChange(date) {
    const newCard = this.state.card;
    newCard.date = date;
    this.setState({
      currentDate: date,
      card: newCard,
    });
    this.props.onChangeMeeting(this.state.cardId, newCard);
  }

  onTimeChange(time) {
    const newCard = this.state.card;
    newCard.time = time;
    this.setState({
      currentTime: time,
      card: newCard,
    });
    this.props.onChangeMeeting(this.state.cardId, newCard);
  }

  onDurationChange(duration) {
    const newDuration = duration;
    this.setState({
      meetingDuration: newDuration,
    });
  }

  onDescriptionChange(description) {
    const newCard = this.state.card;
    newCard.description = description;
    this.setState({
      description,
      card: newCard,
    });
    this.props.onChangeMeeting(this.state.cardId, newCard);
  }

  render() {
    const {
      currentDate, currentTime, meetingDuration, cardId, description, contactList,
    } = this.state;
    // const {userId,contact} = this.props.contactData;
    return (
      <div className="logMeetingCard">
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
                          // ontact = {contact}
                          // userId = {userId}
            currentDate={currentDate}
            currentTime={currentTime}
            meetingDuration={meetingDuration}
            onTimeChange={this.onTimeChange}
            onDateChange={this.onDateChange}
            onDurationChange={this.onDurationChange}
          />
        </div>
      </div>
    );
  }
}

export default LogMeetingCard;
