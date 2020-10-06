import React from 'react';
import "./MeetingLogModal.scss";
import Text from '../../../../../Style/Text';
import MeetingTitle from '../components/MeetingTitle';
import MeetingInput from '../components/MeetingInput';
import MeetingLogBar from '../components/MeetingLogBar';
import MeetingLogModalMultiSelect from'../components/MeetingLogModalMultiSelect';

class MeetingModal extends React.Component {
  constructor(props) {
    super(props);   
  }
  
  render() {
    return (
      <div className="meetingLogModal">
        <MeetingLogModalMultiSelect/>
        <MeetingInput placeholder="Describe your meeting..."/>
        <MeetingLogBar/>
      </div>
    );
  }
}



export default MeetingModal;