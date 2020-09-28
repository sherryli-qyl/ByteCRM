import React from 'react';
import "./MeetingCreateModal.scss";
import MeetingTitle from '../components/MeetingTitle';
import MeetingInput from '../components/MeetingInput';
import MeetingSaveBar from '../components/MeetingSaveBar';
import MeetingCreateModalMultiSelect from'../components/MeetingCreateModalMultiSelect';

class MeetingModal extends React.Component {
  constructor(props) {
    super(props);   
  }
  
  render() {
    return (
      <div className="meetingCreateModal">
        <MeetingTitle/>
        <MeetingCreateModalMultiSelect/>
        <MeetingInput placeholder='Describe your meeting...'/>
        <MeetingSaveBar/>
      </div>
    );
  }
}



export default MeetingModal;