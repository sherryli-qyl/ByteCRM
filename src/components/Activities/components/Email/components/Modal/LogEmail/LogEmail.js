import React from 'react';
import { transferDateInYearMonDay } from '../../../../../../../lib/date';
import Header from '../../private/LogEmailMain';
import Body from './components/LogEmailBody';
import Footer from './components/LogEmailFooter';
import { PostEmail } from '../../../../../../Api/Email/Email';
import store from '../../../../../../../store';
import { saveAction } from '../../../../../../../action';
import './LogEmail.scss';

const user = JSON.parse(localStorage.getItem('user'));

class LogEmail extends React.Component {
    constructor(props) {
        super(props);
        const currentDate = transferDateInYearMonDay(new Date());
        const currentTime = '09:00';
        const { contact } = store.getState().contact;
        let contactList = [];
        let contacts = [];
        contact ? contactList.push(contact) : contactList = [];
        contact ? contacts.push(contact) : contacts = [];

        this.state = {
            currentDate,
            currentTime,
            contactList,
            contacts,
            user,
            contact,
            btnDisable: true,
            description: '',
        };
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
        this.handleDeleteContact = this.handleDeleteContact.bind(this);
        this.handleClickLogBtn = this.handleClickLogBtn.bind(this);
    }

    handleAddContact(id) {
        const newContacts = this.state.contacts;
        newContacts.push(id);
        this.setState({
            contacts: newContacts,
        });
    }

    handleDeleteContact(id) {
        const newContacts = this.state.contacts;
        for (const i in newContacts) {
            if (newContacts[i] === id) {
                newContacts.splice(i, 1);
            }
        }
        this.setState({
            contacts: newContacts,
        });
    }

    handleEditorChange(text) {
        if (this.checkValidation(text) && this.state.contacts.length > 0) {
            this.setState({
                description: text,
                btnDisable: false,
            });
        } else {
            this.setState({
                description: text,
                btnDisable: true,
            });
        }
    }

    handleTimeChange(time) {
        const newTime = time;
        this.setState({
            currentTime: newTime,
        });
    }

    handleDateChange(date) {
        const newDate = date;
        this.setState({
            currentDate: newDate,
        });
    }

    checkValidation(text) {
        const { contacts } = this.state;
        const checkInput = text.replaceAll(' ', '').replaceAll('<br>', '').replaceAll('<p></p>', '');
        if (contacts.length >= 1 && checkInput !== '') {
            return true;
        }

        return false;
    }

    handleClickLogBtn() {
        const {
            currentDate, currentTime, contacts, description, user,
        } = this.state;
        if (this.checkValidation(description)) {
            const body = {
                description,
                date: currentDate,
                time: currentTime,
                contacts,
                userId: user.id,
                type: 'Logged Email',
            };
            const res = PostEmail(body);
            res.then((value) => {
                if (value) {
                    const action = saveAction(value);
                    store.dispatch(action);
                    this.props.modalController.close();
                } else {
                    console.log('Unexpected Error');
                }
            });
        } 
    }

    render() {
        const {
            currentDate, currentTime, contactList, contact, user, btnDisable,
        } = this.state;
        return (
            <div className="logEmailModal">
                <div className="logEmailModal__header">
                    <Header
                        currentDate={currentDate}
                        currentTime={currentTime}
                        contact={contact}
                        userId={user.id}
                        contactList={contactList}
                        onDateChange={this.handleDateChange}
                        onTimeChange={this.handleTimeChange}
                        handleAddContact={this.handleAddContact}
                        handleDeleteContact={this.handleDeleteContact}
                    />
                </div>
                <div className="blockline--top">
                    <Body handleEditorChange={this.handleEditorChange} />
                </div>
                <Footer
                    onClick={this.handleClickLogBtn}
                    btnDisable={btnDisable}
                />
            </div>
        );
    }
}

export default LogEmail;
