import React from 'react';
import "./MeetingLogModal.scss";
import { transferDateInYearMonDay } from '../../../../../services/DateManager';
import {PostMeeting} from '../../../../../Api/Meeting/meeting';
import Header from '../../../../../../components/Activities/components/Meeting/private/LogMeetingMain';
import Body from './components/LogMeetingBody';
import Footer from './components/LogMeetingFooter';
import store from '../../../../../../store';
import {saveAction} from '../../../../../../action';

const user = JSON.parse(localStorage.getItem('user'));

class MeetingModal extends React.Component {
  constructor(props) {
    super(props);  
    const currentDate = transferDateInYearMonDay(new Date());
    const currentTime = "09:00";
    const currentDuration = "30 mins";
    const currentOutcome = "None";
    const {contact} = store.getState().contact;
    //const {user,contact} = this.props;
    let contacts = [];
    let contactList = [];
    contact ? contactList.push(contact) : contactList = [];
    contact ? contacts.push(contact) : contacts = [];
    this.state = {
        currentDate,
        currentTime,
        currentDuration,
        currentOutcome,
        contactList,
        contacts,
        user,
        contact,
        btnDisable: true,
        description: '',
    }
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleClickLogBtn = this.handleClickLogBtn.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this); 
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleOutcomeChange = this.handleOutcomeChange.bind(this);
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

    handleEditorChange(text) {
        if (this.checkValidation(text)){
            this.setState({
                description: text,
                btnDisable: false
            })
        }
        else{
            this.setState({
                description: text,
                btnDisable: true,
            })
        }
    }

    handleTimeChange(time) {
        const newTime = time;
        this.setState({
            currentTime: newTime,
        })
    }

    handleDurationChange(duration) {
        const newDuration = duration;
        this.setState({
            currentDuration: newDuration,
        })
    }

    handleOutcomeChange(outcome) {
        const newOutcome = outcome;
        this.setState({
            meetingOutcome: newOutcome,
        })
      }

    handleDateChange(date) {
        const newDate = date;
        this.setState({
            currentDate: newDate,
        })
    }

    checkValidation(text){
        const checkInput = text.replaceAll(" ","").replaceAll('<br>', '').replaceAll('<p></p>','');
        if (checkInput!== ''){
        return true
        }
        else{
            return false; 
        }
    }

    handleClickLogBtn(){
        const {currentDate,currentTime,contacts,description,user,currentOutcome} = this.state;
        if (this.checkValidation(description)){
            const body = {
                description: description,
                date: currentDate,
                time:currentTime,
                contacts:contacts,
                //attendees:"5f740910947dc00d88cc918c",
                type:'Logged Meeting',
                title: 'Test Meeting',
                duration: '30 minutes',
                user:user.id,
                outcome:currentOutcome,
            }
            const res = PostMeeting(body);
            res.then(value=>{
                if (value){
                    const action = saveAction(value);
                    store.dispatch(action);
                    this.props.modalController.close();
                }
                else{
                    console.log("Unexpected Error");
                }
            })
        }
        else{
            return;
        }
    }
  
  render() {
    const { currentDate, currentTime,contactList,contact,user,btnDisable} = this.state;
    return (
      <div className="meetingLogModal">
        <div className="logMeetingModal__header">
          <Header currentDate={currentDate}
                  currentTime={currentTime}
                  contact = {contact}
                  userId = {user.id}
                  contactList = {contactList}
                  onDurationChange = {this.handleDurationChange}
                  onOutcomeChange = {this.handleOutcomeChange}
                  onDateChange = {this.handleDateChange}
                  onTimeChange = {this.handleTimeChange}
                  handleAddContact = {this.handleAddContact}
                  handleDeleteContact = {this.handleDeleteContact}
          />
        </div>
      <div className='blockline--top' >
        <Body handleEditorChange={this.handleEditorChange} />
      </div>
      <Footer onClick = {this.handleClickLogBtn}
          btnDisable = {btnDisable}/>
      </div>
    );
  }
}



export default MeetingModal;