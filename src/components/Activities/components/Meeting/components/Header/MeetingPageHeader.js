import React, { useContext } from 'react';
import CreateButton from "../../../../../Style/Button/Activities/CreateButton";
import LogButton from "../../../../../Style/Button/Activities/LogButton";
import MeetingCreateModal from '../../Modal/MeetingCreateModal';
import MeetingLogModal from '../../Modal/MeetingLogModal';
import {ModalContext} from '../../../../../Modal/components/ModalContext';
import "./MeetingPageHeader.scss";
import Modal from '../../../../../../js/Modal';




const MeetingPageHeader = (props) => {
    const logMeetingModal = new Modal('Meeting', 'Meeting',  MeetingLogModal);
    const createMeetingModal = new Modal('Meeting', 'Meeting',  MeetingCreateModal);
    return(
        <ModalContext.Consumer>
            {modalController =>
                <div className="meetingPage__header">
                    <div className="meetingPage__header__logMeeting">
                        <LogButton onClick={() => modalController.open(logMeetingModal)}>
                            Log Meeting
                        </LogButton> {/* //set function */}
                    </div>

                    <div className='meetingPage__header__createMeeting'>
                        <CreateButton onClick={() => modalController.open(createMeetingModal)}> {/* //set function */}
                            Create Meeting
                        </CreateButton>
                    </div>
                </div>}
    </ModalContext.Consumer>
    )
}



export default MeetingPageHeader;