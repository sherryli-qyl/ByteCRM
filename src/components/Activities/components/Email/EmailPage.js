import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import shuffleCards from '../../../services/shuffleCards';
import { GetEmails, UpdateEmail,DeleteEmailLog,UpdateContacts, RemoveContacts } from '../../../Api/Email/Email';
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

    sortCardsArray() {
        const newCardsArray = shuffleCards(this.state.cardList);
        this.setState({
            cardsArray: newCardsArray
        })
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

    handleLogEmail(email){
        const newCardList = this.state.cardList;
        newCardList.push(email);
        console.table(newCardList)
        this.setState({
            cardList:newCardList,
        })
        this.sortCardsArray()
    }

    handleDeleteCard(id){
        const response = DeleteEmailLog(id);
        response.then(value =>(
            console.log(value)
        ))
        this.handleInitPage();
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

    handleInitPage(){
        const emails = GetEmails(this.props.contactId);
        emails.then(value => {
            this.setState({
                cardList: value,
            });
            return this.state.cardList
        }).then(data => {
            if (data.length >= 1) {
                this.sortCardsArray();
            }
        });
    }

    componentDidMount() {
        this.handleInitPage();
    }

    render() {
        const { cardsArray } = this.state;
        return (
            <ActivityContext.Consumer>
                {contactData => (
                    <div className="emailPage">
                        <EmailPageHeader contactData={contactData}
                                         handleLogEmail = {this.handleLogEmail} />
                        <EmailCards 
                            contactData = {contactData}
                            cardsArray={cardsArray}
                            handleDeleteCard = {this.handleDeleteCard}
                            handleAddContact={this.handleAddContact}
                            handleRemoveContact={this.handleRemoveContact}
                            onChangeEmail={this.onChangeEmail} />
                    </div>
                )}
            </ActivityContext.Consumer>
        )
    }
}

export default EmailPage;