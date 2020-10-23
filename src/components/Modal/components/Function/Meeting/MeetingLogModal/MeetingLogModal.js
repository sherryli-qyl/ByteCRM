import React from 'react';
import "./MeetingLogModal.scss";
import { transferDateInYearMonDay } from '../../../../../services/DateManager';
import Text from '../../../../../Style/Text';
import MeetingTitle from '../components/MeetingTitle';
import MeetingInput from '../components/MeetingInput';
import MeetingLogBar from '../components/MeetingLogBar';
import MeetingLogModalMultiSelect from'../components/MeetingLogModalMultiSelect';
import {PostMeeting} from '../../../../../Api/Meeting/meeting';
import Header from '../components/LogMeetingMain';
import Body from './components/LogMeetingBody';
import Footer from './components/LogMeetingFooter';

class MeetingModal extends React.Component {
  constructor(props) {
    super(props);  
    const currentDate = transferDateInYearMonDay(new Date());
        const currentTime = "09:00";
        const{userId,contact} = this.props.contactData;
        let contacts = []
        let contactList = []
        contact ? contactList.push(contact): contactList = [];
        contact._id? contacts= [contact._id] : contacts = [];
        this.state = {
            currentDate,
            currentTime,
            contactList,
            contacts,
            userId,
            contact,
            btnDisable: true,
            description: '',
        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleClickLogBtn = this.handleClickLogBtn.bind(this); 
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
    const {currentDate,currentTime,contacts,description,userId} = this.state;
    if (this.checkValidation(description)){
        const body = {
            description: description,
            date: currentDate,
            time:currentTime,
            contacts:contacts,
            attendees:"5f740910947dc00d88cc918c",
            type:'Logged Meeting',
            title: 'Test Meeting',
            duration: '30 minutes',
        }
        const res = PostMeeting(body);
        res.then(value=>{
            if (value){
                this.props.handleLogMeeting(value);
                this.props.contactData.close();
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
    const { currentDate, currentTime,contactList,contact,userId,btnDisable} = this.state;
    return (
      <div className="meetingLogModal">
        <div className="logEmailModal__header">
          <Header currentDate={currentDate}
                  currentTime={currentTime}
                  contact = {contact}
                  userId = {userId}
                  contactList = {contactList}
                  onDateChange = {this.handleDateChange}
                  onTimeChange = {this.handleTimeChange}
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