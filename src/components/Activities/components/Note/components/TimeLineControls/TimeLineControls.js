import React, { useContext } from 'react';
import CreateButton from '../../../../../Style/Button/Activities/CreateButton';
import NoteModal from '../NoteModal';
import Modal from '../../../../../../js/Modal';
import { ModalContext } from '../../../../../Modal/components/ModalContext';
import './TimeLineControls.scss';


const TimeLineControls = (props) => {
  const createModal = (closeModal) => new Modal(
    'Note', 
    'Note', 
    <NoteModal 
      contact={props.contact}
      handleCloseModal = {closeModal}
      handleCreateNote = {props.handleCreateNote}
    />
    ); 

  return (
    <ModalContext.Consumer>
      {modalController => 
        <div className="timeline-action-container">
          <CreateButton 
            onClick={() => modalController.open(createModal(modalController.close))}
          >
            Create Note</CreateButton>
        </div>
      }
    </ModalContext.Consumer>
  )
}

export default TimeLineControls;
