import React from 'react';
import './CreateMeetingCard.scss';
import Footer from './components/Footer/CreateMeetingFooter';
import Body from '../../../../private/CreateMeetingMain';
import Header from '../LogMeetingCard/components/Header'



class CreateMeetingCard extends React.Component {
    constructor(props) {
        super(props);
        const { _id,description,contacts } = this.props.card;
        this.state = {
            title: this.props.card.title,
            currentDate: this.props.card.date,
            currentTime: this.props.card.time,
            meetingDuration :this.props.card.duration,
            meetingOutcome:this.props.card.outcome,
            card:this.props.card,
            cardId: _id,
            description,
            contactList:contacts,
        }
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
        this.handleDeleteContact = this.handleDeleteContact.bind(this); 
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }
    handleDurationChange(time) {
        const newTime = time;
        this.setState({
            currentTime: newTime,
        })
    }
    
    handleDateChange(date) {
        const newDate = date;
        this.setState({
            currentDate: newDate,
        })
    }
    
    handleTimeChange(time) {
        const newTime = time;
        this.setState({
            currentTime: newTime,
        })
    }
    handleAddContact(id){
        const newContacts = this.state.contacts;
        newContacts.push(id);
        this.setState({
            contacts:newContacts
        })
    }
    
    handleDeleteContact(id){
        const newContacts = this.state.contacts;
        for(let i in newContacts){
            if (newContacts[i] === id){
                newContacts.splice(i,1);
            }
        }
        this.setState({
            contacts:newContacts,
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
        const { currentDate, currentTime,meetingDuration,cardId, description,title,contactList,meetingOutcome} = this.state;
        const {user,contact} = this.props;
        return (
                <div className="createMeetingCard">
                        <div className="createMeetingCard__title">{title}</div>
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
                            onTimeChange={this.handleTimeChange}
                            onDateChange={this.handleDateChange}
                            onDurationChange={this.handleDurationChange}
                            handleAddContact = {this.handleAddContact}
                            handleDeleteContact = {this.handleDeleteContact}
                            />
                </div>
                        <Footer userName={this.props.card.user.fullName} />               
                </div>
        )
    }
}

export default CreateMeetingCard;