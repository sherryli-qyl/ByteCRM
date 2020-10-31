import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import shuffleCards from '../../../services/shuffleCards';
import store from '../../../../store';
import {
  GetEmails, GetMultiContactsEmails, UpdateEmail, DeleteEmailLog, UpdateContacts, RemoveContacts,
} from '../../../Api/Email/Email';
import './EmailPage.scss';

const user = JSON.parse(localStorage.getItem('user'));

class EmailPage extends React.Component {
  constructor(props) {
    super(props);
    const { contact, associatedContacts } = this.props;
    this.state = {
      cardList: [],
      user,
      contact,
      associatedContacts,
      cardsArray: [],
      reload: true,
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.handleLogEmail = this.handleLogEmail.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleRemoveContact = this.handleRemoveContact.bind(this);
  }

  sortCardsArray(emailList) {
    if (emailList) {
      const newCardsArray = shuffleCards(emailList);
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

  handleLogEmail(email) {
    const newCardList = this.state.cardList;
    newCardList.push(email);
    this.setState({
      cardList: newCardList,
    });
    this.sortCardsArray(newCardList);
  }

  handleDeleteCard(id) {
    const response = DeleteEmailLog(id);
    response.then((value) => {
      if (value) {
        this.handleInitPage();
      }
    });
  }

  handleAddContact(contactId, emailId) {
    UpdateContacts(contactId, emailId);
  }

  handleRemoveContact(contactId, emailId) {
    RemoveContacts(contactId, emailId);
  }

  onChangeEmail(emailId, body) {
    UpdateEmail(emailId, body);
  }

  handleInitPage() {
    let data = [];
    const { contact, associatedContacts } = this.state;
    if (contact) {
      data = GetEmails(contact.id);
    } else if (associatedContacts) {
      let ids = '';
      for (let i = 0; i < associatedContacts.length; i++) {
        const { id } = associatedContacts[i];
        i === 0 ? ids += id : ids += `&&${id}`;
      }
      data = GetMultiContactsEmails(ids);
    }
    data.then((response) => {
      if (response.statusText === 'OK') {
        this.setState({
          cardList: response.data,
          reload: false,
        });
        return response.data;
      }
      return [];
    }).then((cards) => {
      this.sortCardsArray(cards);
    });
  }

  componentDidMount() {
    store.subscribe(() => {
      const { reload, value } = store.getState().reload;
      if (reload) {
        this.handleLogEmail(value);
      }
    });
    if (this.state.reload) {
      this.handleInitPage();
    }
  }

  render() {
    const { cardsArray, contact, user } = this.state;
    return (
      <div className="emailPage">
        <EmailPageHeader
          contact={contact}
          user={user}
          handleLogEmail={this.handleLogEmail}
        />
        <EmailCards
          contact={contact}
          user={user}
          cardsArray={cardsArray}
          handleDeleteCard={this.handleDeleteCard}
          handleAddContact={this.handleAddContact}
          handleRemoveContact={this.handleRemoveContact}
          onChangeEmail={this.onChangeEmail}
        />
      </div>

    );
  }
}

export default EmailPage;
