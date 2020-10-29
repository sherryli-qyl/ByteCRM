import React, { useContext } from 'react';
import LogCallButton from '../../../../../../Style/Button/Activities/LogButton';
import LogCallModal from '../../../../Note/components/NoteModal';
import Modal from '../../../../../../../js/Modal';
import { ModalContext } from '../../../../../../Modal/components/ModalContext';
import CreateButton from '../../../../../../Style/Button/Activities/CreateButton';
import './TimeLineControls.scss';

const TimeLineControls = () => {
  const onClick = useContext(ModalContext);
  const createLogCall = new Modal('Note', 'Note', <LogCallModal />);

  return (
    <div className="call-timeline-action-container">
      <CreateButton>Make a phone call</CreateButton>

      <LogCallButton
        className="call-timeline-action-button"
        onClick={() => onClick(createLogCall)}
      >
        Log call
      </LogCallButton>
    </div>
  );
};

export default TimeLineControls;
