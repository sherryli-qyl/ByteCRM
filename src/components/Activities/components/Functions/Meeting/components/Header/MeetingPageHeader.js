import React, { useContext } from 'react';
import CreateButton from '../../../../../../Style/Button/Activities/CreateButton';
import LogButton from '../../../../../../Style/Button/Activities/LogButton';
import MeetingCreateModal from '../../../../../../Modal/components/Function/Meeting/MeetingCreateModal';
import MeetingLogModal from '../../../../../../Modal/components/Function/Meeting/MeetingLogModal';
import { ModalContext } from '../../../../../../Modal/components/ModalContext';
import './MeetingPageHeader.scss';
import Modal from '../../../../../../../js/Modal';

const MeetingPageHeader = (props) => {
  /* const createModal = new Modal('Schedule', 'Meeting',<MeetingCreateModal contact={props.contact}/>); //create your modal
    const logModal = (closeModal) =>
        (new Modal('Log Meeting', 'Log Meeting',
            <MeetingLogModal contact={props.contact}
                            user = {props.user}
                            handleCloseModal = {closeModal}
                            handleLogMeeting = {props.handleLogMeeting}
                            />)); */
  const logMeetingModal = new Modal('Meeting', 'Meeting', MeetingLogModal);
  const createMeetingModal = new Modal('Meetinge', 'Meeting', MeetingCreateModal);
  return (
    <ModalContext.Consumer>
      {(modalController) => (
        <div className="meetingPage__header">
          <div className="meetingPage__header__logMeeting">
            <LogButton onClick={() => modalController.open(logMeetingModal)}>
              Log Meeting
            </LogButton>
            {' '}
            {/* //set function */}
          </div>

          <div className="meetingPage__header__createMeeting">
            <CreateButton onClick={() => modalController.open(createMeetingModal)}>
              {' '}
              {/* //set function */}
              Create Meeting
            </CreateButton>
          </div>
        </div>
      )}
    </ModalContext.Consumer>
  );
};

export default MeetingPageHeader;
