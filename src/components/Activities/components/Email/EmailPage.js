import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import shuffleCards from '../../../services/shuffleCards';
import { GetEmails,UpdateEmail,UpdateContacts,RemoveContacts} from '../../../Api/Email/Email';
import "./EmailPage.scss";


class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
            cardsArray: [],
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
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
        console.table(this.state.cardsList);
    }

    handleAddContact(contactId, emailId) {
        UpdateContacts(contactId, emailId);
    }

    handleRemoveContact(contactId, emailId){
        console.log(contactId+ "//" + emailId)
        RemoveContacts(contactId, emailId);
    }

    onChangeEmail(emailId, body) {
        UpdateEmail(emailId, body);
    }

    componentDidMount() {
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

    render() {
        const { cardsArray } = this.state;
        return (
            <div className="emailPage">
                <EmailPageHeader />
                <EmailCards cardsArray={cardsArray}
                            handleAddContact = {this.handleAddContact}
                            handleRemoveContact = {this.handleRemoveContact}
                            onChangeEmail = {this.onChangeEmail} />
            </div>
        )
    }
}

export default EmailPage;