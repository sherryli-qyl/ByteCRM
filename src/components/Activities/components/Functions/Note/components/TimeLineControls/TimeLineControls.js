import React, { useContext } from 'react';
import CreateButton from '../../../../../../Style/Button/Activities/CreateButton';
import NoteModal from '../../../../../../Modal/components/Function/Note/NoteModal';
import Modal from '../../../../../../../js/Modal';
import { ContactContext } from '../../../../../../Contact/ContactContext';
import './TimeLineControls.scss';


const TimeLineControls = () => {
  const onClick= useContext(ContactContext);
  const createModal = new Modal('Note', 'Note', <NoteModal/>); 

  return (
    <div className="timeline-action-container">
      <CreateButton 
        className="timeline-action-button"
        onClick={() => onClick(createModal)}
      >
        Create Note</CreateButton>
    </div>
  )
}

export default TimeLineControls;