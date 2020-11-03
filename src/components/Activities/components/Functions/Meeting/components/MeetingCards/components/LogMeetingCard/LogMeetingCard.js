import React from 'react';
import './LogMeetingCard.scss';
import Body from '../../../../private/LogMeetingMain';
import Header from './components/Header/MeetingCardHeader';
import Footer from './components/Footer/MeetingCardFooter';


class LogMeetingCard extends React.Component {
    constructor(props) {
        super(props);
        const { _id,description,contacts } = this.props.card;
        this.state = {
            currentDate: this.props.card.date,
            currentTime: this.props.card.time,
            meetingDuration :this.props.card.duration,
            meetingOutcome:this.props.card.outcome,
            card:this.props.card,
            cardId: _id,
            description,
            contactList:contacts,
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.onDurationChange = this.onDurationChange.bind(this);
        this.onOutcomeChange = this.onOutcomeChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    onDateChange(date) {
        let newCard = this.state.card;
        newCard.date = date;
        this.setState({
            currentDate: date,
            card: newCard,
        })
        this.props.onChangeMeeting(this.state.cardId,newCard)
    }

    onTimeChange(time) {
        let newCard = this.state.card;
        newCard.time = time;
        this.setState({
            currentTime: time,
            card:newCard,
        })
        this.props.onChangeMeeting(this.state.cardId,newCard)
    }

    onDurationChange(duration) {
        const newDuration = duration;
        this.setState({
          meetingDuration: newDuration,
        })
      }

    onOutcomeChange(outcome) {
        const newOutcome = outcome;
        this.setState({
            meetingOutcome: newOutcome,
        })
      }

    onDescriptionChange(description){
        let newCard = this.state.card;
        newCard.description = description;
        this.setState({
            description:description,
            card:newCard,
        })
        this.props.onChangeMeeting(this.state.cardId,newCard)
    }

    render() {
        const { currentDate, currentTime,meetingDuration,cardId, description,contactList,meetingOutcome} = this.state;
        const {user,contact} = this.props;
        return (
            <div className="logMeetingCard">
                {description?
                    <Header 
                        cardId={cardId}
                        description={description}
                        onContentChange = {this.onDescriptionChange}/>
                    :
                    ""
                }
                <div className='blockline' >
                    <Body contactList = {contactList}
                          contact = {contact}
                          userId = {user.id}
                          currentDate={currentDate}
                          currentTime={currentTime}
                          meetingDuration={meetingDuration}
                          meetingOutcome={meetingOutcome}
                          onTimeChange={this.onTimeChange}
                          onDateChange={this.onDateChange}
                          onDurationChange={this.onDurationChange}
                          onOutcomeChange={this.onOutcomeChange}
                          handleAddContact = {this.handleAddContact}
                          handleDeleteContact = {this.handleDeleteContact}
                           />
                </div>
                <Footer userName={this.props.card.user.fullName} />
            </div>
        )
    }
}

export default LogMeetingCard;