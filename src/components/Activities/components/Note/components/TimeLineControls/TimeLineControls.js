import React, { useContext } from 'react';
import CreateButton from '../../../../../Style/Button/Activities/CreateButton';
import NoteModal from '../NoteModal';
import Modal from '../../../../../../js/Modal';
import { ModalContext } from '../../../../../Modal/components/ModalContext';
import './TimeLineControls.scss';


const TimeLineControls = (props) => {


  const modal = (value) => (<NoteModal modalController={value}
                                       handleCloseModal = {value.close}
                                       handleCreateNote={props.handleCreateNote}/>)
  const noteModal = new Modal('Note', 'Note', modal);

  return (
    <ModalContext.Consumer>
      {modalController =>
        <div className="timeline-action-container">
          <CreateButton
            onClick={() => modalController.open(noteModal)}
          >
            Create Note</CreateButton>
        </div>
      }
    </ModalContext.Consumer>
  )
}

export default TimeLineControls;
