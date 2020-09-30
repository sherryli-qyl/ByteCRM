import React, {useContext} from 'react';
import CreateButton from '../../../../../Style/Button/Activities/CreateButton';
import TaskModal from '../TaskModal/';
import {ModalContext} from '../../../../../Modal/components/ModalContext';
import Modal from '../../../../../../js/Modal';
import "./TaskPageHeader.scss";

const TaskPageHeader = () => {
  const onClick= useContext(ModalContext); 
  const createModal = new Modal('Task', 'Task',<TaskModal />); 
  return(
    <div className="taskPage__header">
      <div className='taskPage__header__createTask'>
        <CreateButton onClick={() => onClick(createModal)}>Create Task</CreateButton>
      </div>
    </div>
  )
}

export default TaskPageHeader;