import React from 'react';
import MeetingCards from './components/MeetingCards/MeetingCards';
import MeetingPageHeader from './components/Header/MeetingPageHeader';
import shuffleCards from '../../../../services/shuffleCards';
import {
  GetMeetings, UpdateMeeting, DeleteMeetingLog, UpdateContacts, RemoveContacts,
} from '../../../../Api/Meeting/meeting';
import store from '../../../../../store';
import './MeetingPage.scss';

const user = JSON.parse(localStorage.getItem('user'));// user id

class MeetingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      cardList: [],
      cardsArray: [],
      contact: this.props.contact,
      associatedContacts: this.props.associatedContacts,
      reload: true,
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeMeeting = this.onChangeMeeting.bind(this);
    this.handleLogMeeting = this.handleLogMeeting.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleRemoveContact = this.handleRemoveContact.bind(this);
  }

  handleAddContact(contactId, meetingId) {
    UpdateContacts(contactId, meetingId);
  }

  handleRemoveContact(contactId, meetingId) {
    RemoveContacts(contactId, meetingId);
  }

  sortCardsArray(meetingList) {
    if (meetingList) {
      const newCardsArray = shuffleCards(meetingList);
      this.setState({
        cardsArray: newCardsArray,
      });
    }
  }

  onChangeText(newContent, cardKey) {
    const newCardsList = this.state.cardList;
    for (const i in newCardsList) {
      if (newCardsList[i].key === cardKey) {
        newCardsList[i].description = newContent;
        this.setState({
          cardsList: newCardsList,
        });
      }
    }
  }

  onChangeMeeting(meetingId, body) {
    UpdateMeeting(meetingId, body);
  }

  handleLogMeeting(meeting) {
    const newCardList = this.state.cardList;
    newCardList.push(meeting);
    this.setState({
      cardList: newCardList,
    });
    this.sortCardsArray(newCardList);
  }

  handleDeleteCard(id) {
    const response = DeleteMeetingLog(id);
    response.then((value) => {
      if (value) {
        this.handleInitPage();
      }
    });
  }

  handleInitPage() {
    console.log('this.state');
    console.log(this.state);
    const { contact } = this.state;
    const meetings = GetMeetings(contact.id);
    // const meetings = GetMeetings(this.id);
    meetings.then((meetingList) => {
      if (meetingList.length > 0) {
        this.setState({
          cardList: meetingList,
          reload: false,
        });
        return meetingList;
      }
      return null;
    }).then((meetingList) => {
      this.sortCardsArray(meetingList);
    });
  }

  componentDidMount() {
    store.subscribe(() => {
      const { reload, value } = store.getState().reload;
      if (reload) {
        this.handleLogMeeting(value);
      }
    });
    if (this.state.reload) {
      this.handleInitPage();
    }
  }

  render() {
    const { cardsArray, contact, user } = this.state;
    return (
      <div className="meetingPage">
        <MeetingPageHeader
          contact={contact}
          user={user}
          handleLogMeeting={this.handleLogMeeting}
        />
        <MeetingCards
          contact={contact}
          user={user}
          cardsArray={cardsArray}
          handleDeleteCard={this.handleDeleteCard}
          handleAddContact={this.handleAddContact}
          handleRemoveContact={this.handleRemoveContact}
          onChangeMeeting={this.onChangeMeeting}
        />
      </div>
    );
  }
}

export default MeetingPage;
