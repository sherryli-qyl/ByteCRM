import React from 'react';
import CreateButton from '../../../../../Style/Button/Activities/CreateButton';
import TaskModal from '../TaskModal/';
import {ModalContext} from '../../../../../Modal/components/ModalContext';
import Modal from '../../../../../../js/Modal';
import "./TaskPageHeader.scss";

const TaskPageHeader = (props) => {
  const createModal = (closeModal) => new Modal('Task', 'Task',<TaskModal getRelatedTo={props.getRelatedTo}
                                                                          handleCloseModal={closeModal}
                                                                          handleCreateTask={props.handleCreateTask}/>); 
  return(
    <ModalContext.Consumer>
      {modalController =>
        <div className="taskPage__header">
          <div className='taskPage__header__createTask'>
            <CreateButton onClick={() => modalController.open(createModal(modalController.close))}>Create Task</CreateButton>
          </div>
        </div>
  }
    </ModalContext.Consumer>
  )
}

export default TaskPageHeader;