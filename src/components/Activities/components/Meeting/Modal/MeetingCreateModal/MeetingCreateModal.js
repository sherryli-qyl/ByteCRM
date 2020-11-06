import React from 'react';
import "./MeetingCreateModal.scss";
import MeetingTitle from '../components/MeetingTitle';
import Header from '../../../../../Activities/components/Meeting/private/CreateMeetingMain';
import store from '../../../../../../store';
import { transferDateInYearMonDay } from '../../../../../services/DateManager';
import {saveAction} from '../../../../../../action';
import {PostMeeting} from '../../../../../Api/Meeting/meeting';
import Body from './components/CreateMeetingBody';
import Footer from './components/CreateMeetingFooter';



const user = JSON.parse(localStorage.getItem('user'));
class MeetingCreateModal extends React.Component {
  constructor(props) {
    super(props);   
    const currentDate = transferDateInYearMonDay(new Date());
    const currentTime = "09:00";
    const currentDuration = "1 hour";
    const currentTitle = "new meeting"
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
      contactList,
      contacts,
      user,
      contact,
      btnDisable: true,
      description: '',
      currentTitle,
  }
  this.handleEditorChange = this.handleEditorChange.bind(this);
  this.handleTimeChange = this.handleTimeChange.bind(this);
  this.handleTitleChange = this.handleTitleChange.bind(this);
  this.handleDateChange = this.handleDateChange.bind(this);
  this.handleDurationChange = this.handleDurationChange.bind(this);
  this.handleClickLogBtn = this.handleClickLogBtn.bind(this);
  this.handleAddContact = this.handleAddContact.bind(this);
  this.handleDeleteContact = this.handleDeleteContact.bind(this); 
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

handleDurationChange(duration) {
    const newDuration = duration;
    this.setState({
        currentDuration: newDuration,
    })
}
handleTitleChange(title){
    const newTitle = title;
    this.setState({
        currentTitle: newTitle,
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

checkValidation(text){
    const checkInput = text.replaceAll(" ","").replaceAll('<br>', '').replaceAll('<p></p>','').replaceAll();
    if (checkInput!== ''){
    return true
    }
    else{
        return false; 
    }
}

handleClickLogBtn(){
    const {currentDate,currentTime,contacts,description,user,currentTitle,currentDuration} = this.state;
    if (this.checkValidation(description)){
        const body = {
            description: description,
            date: currentDate,
            time:currentTime,
            contacts:contacts,
            type:'Meeting',
            title: currentTitle,
            duration: currentDuration,
            user:user.id,
            outcome:"Scheduled",
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
      <div className="meetingCreateModal">
        <MeetingTitle onTitleChange = {this.handleTitleChange}
                        currentTitle ={this.currentTitle}/>
        <Header currentDate={currentDate}
                  currentTime={currentTime}
                  contact = {contact}
                  userId = {user.id}
                  contactList = {contactList}
                  onDateChange = {this.handleDateChange}
                  onTimeChange = {this.handleTimeChange}
                  onDurationChange={this.handleDurationChange}
                  handleAddContact = {this.handleAddContact}
                  handleDeleteContact = {this.handleDeleteContact}
          />
        <div className='blockline--top' >
          <Body handleEditorChange={this.handleEditorChange} />
        </div>
        <Footer onClick = {this.handleClickLogBtn}
          btnDisable = {btnDisable}/>
      </div>
    );
  }
}



export default MeetingCreateModal;