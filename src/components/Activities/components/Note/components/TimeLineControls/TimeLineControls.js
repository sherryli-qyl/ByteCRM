import React, { useContext } from 'react';
import CreateButton from '../../../../../Style/Button/Activities/CreateButton';
import NoteModal from '../NoteModal';
import Modal from '../../../../../../js/Modal';
import { ModalContext } from '../../../../../Modal/components/ModalContext';
import './TimeLineControls.scss';


const TimeLineControls = (props) => {
  const onClick= useContext(ModalContext);
  const createModal = new Modal(
    'Note', 
    'Note', 
    <NoteModal 
      contactData={props.contactData}
      handleCreateNote = {props.handleCreateNote}
    />
    ); 

  return (
    <ModalContext.Consumer>
      { openModal => 
        <div className="timeline-action-container">
          <CreateButton 
            onClick={() => openModal(createModal)}
          >
            Create Note</CreateButton>
        </div>
      }
    </ModalContext.Consumer>
  )
}

export default TimeLineControls;
