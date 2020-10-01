import React, { useContext } from 'react';
import CreateButton from '../../../../../../Style/Button/Activities/CreateButton';
import NoteModal from '../../../../../../Modal/components/Function/Note/NoteModal';
import Modal from '../../../../../../../js/Modal';
import { ModalContext } from '../../../../../../Modal/components/ModalContext';
import './TimeLineControls.scss';


const TimeLineControls = () => {
  const onClick= useContext(ModalContext);
  const createModal = new Modal('Note', 'Note', <NoteModal/>); 

  return (
    <div className="timeline-action-container">
      <CreateButton 
        onClick={() => onClick(createModal)}
      >
        Create Note</CreateButton>
    </div>
  )
}

export default TimeLineControls;
