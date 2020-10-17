import React from 'react';
import './LogMeetingCard.scss';
import Body from '../../../../private/LogMeetingMain';
import Header from './components/Header';


class LogMeetingCard extends React.Component {
    constructor(props) {
        super(props);
        const { _id,description,contacts } = this.props.card;
        this.state = {
            currentDate: this.props.card.date,
            currentTime: this.props.card.time,
            card:this.props.card,
            cardId: _id,
            description,
            contactList:contacts
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
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
        const { currentDate, currentTime,cardId, description,contactList} = this.state;
        const {userId,contact} = this.props.contactData;
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
                          userId = {userId}
                          currentDate={currentDate}
                          currentTime={currentTime}
                          onTimeChange={this.onTimeChange}
                          onDateChange={this.onDateChange} />
                </div>
            </div>
        )
    }
}

export default LogMeetingCard;