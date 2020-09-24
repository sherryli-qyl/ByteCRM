import React from 'react';
import "./MeetingModal.scss";
import Text from '../../../../Style/Text';
import MeetingTitle from './components/MeetingTitle';
import MeetingInput from './components/MeetingInput';
import MeetingSaveBar from './components/MetingSaveBar';
import MeetingModalMultiSelect from'./components/MeetingModalMultiSelect';

class MeetingModal extends React.Component {
  constructor(props) {
    super(props);   
  }
  
  render() {
    return (
      <div className="meetingModal">
        <MeetingTitle/>
        <MeetingModalMultiSelect/>
        <MeetingInput/>
        <MeetingSaveBar/>
      </div>
    );
  }
}



export default MeetingModal;