import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import shuffleCards from '../../../services/shuffleCards';
import { GetEmails, UpdateEmail, DeleteEmailLog, UpdateContacts, RemoveContacts } from '../../../Api/Email/Email';
import "./EmailPage.scss";
import { ActivityContext } from '../../Context';


class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
            cardsArray: [],
        }
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
                cardsArray: newCardsArray
            })
        }
        return;
    }

    onChangeText(newContent, cardKey) {
        const newCardsList = this.state.cardList;
        for (let i in newCardsList) {
            if (newCardsList[i].key === cardKey) {
                newCardsList[i].description = newContent;
                this.setState({
                    cardsList: newCardsList,
                })
            }
        }
    }

    handleLogEmail(email) {
        const newCardList = this.state.cardList;
        newCardList.push(email);
        this.setState({
            cardList: newCardList,
        })
        this.sortCardsArray()
    }

    handleDeleteCard(id) {
        const response = DeleteEmailLog(id);
        response.then(value => {
            if (value) {
                this.handleInitPage();
            }
        })
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
        const emails = GetEmails(this.props.contactId);
        emails.then(emailList => {
            if (emailList.length > 0) {
                return emailList;
            }
            else {
                return null;
            }
        }).then((emailList) => {
            this.sortCardsArray(emailList);
        });
    }

    componentDidMount() {
        this.handleInitPage();
    }

    render() {
        const { cardsArray } = this.state;
        return (
            <ActivityContext.Consumer>
                {contactData => {
                    return (
                        <div className="emailPage">
                            <EmailPageHeader 
                                contactData={contactData}
                                handleLogEmail={this.handleLogEmail} />
                            <EmailCards
                                contactData={contactData}
                                cardsArray={cardsArray}
                                handleDeleteCard={this.handleDeleteCard}
                                handleAddContact={this.handleAddContact}
                                handleRemoveContact={this.handleRemoveContact}
                                onChangeEmail={this.onChangeEmail} />
                        </div>
                    )
                }}
            </ActivityContext.Consumer>
        )
    }
}

export default EmailPage;