import React from 'react';
import CreateButton from '../../../../../Style/Button/Activities/CreateButton';
import NoteModal from '../NoteModal';
import Modal from '../../../../../../js/Modal';
import { ModalContext } from '../../../../../Modal/components/ModalContext';
import './TimeLineControls.scss';

const TimeLineControls = () => {
  const noteModal = new Modal('Note', 'Note', NoteModal);

  return (
    <ModalContext.Consumer>
      {(modalController) => (
        <div className="timeline-action-container">
          <CreateButton
            onClick={() => modalController.open(noteModal)}
          >
            Create Note
          </CreateButton>
        </div>
      )}
    </ModalContext.Consumer>
  );
};

export default TimeLineControls;
