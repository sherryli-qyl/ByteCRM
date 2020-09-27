import React, { useContext } from 'react';
import LogCallButton from '../../../../../../Style/Button/Activities/LogButton';
import LogCallModal from '../../../../../../Modal/components/Function/Note/NoteModal';
import Modal from '../../../../../../../js/Modal';
import { ModalContext } from '../../../../../../Modal/components/ModalContext';
import PhoneCallBtn from '../../../../../../Style/Button/Activities/CreateButton';
import './TimeLineControls.scss';

const TimeLineControls = () => {
  const onClick = useContext(ModalContext);
  const createLogCall = new Modal('Note', 'Note', <LogCallModal />);

  return (
    <div className="timeline-action-container">
      <PhoneCallBtn>Make a phone call</PhoneCallBtn>

      <LogCallButton
        className="timeline-action-button"
        onClick={() => onClick(createLogCall)}
      >
        Log call
      </LogCallButton>
    </div>
  );
};

export default TimeLineControls;
