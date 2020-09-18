import React from 'react';
import CreateButton from '../../../../../../../../../Style/Button/Activities/CreateButton';
import "./TaskPageHeader.scss";

const TaskPageHeader = () => (
  <div className="taskPage__header">
    <div className='taskPage__header__createTask'>
      <CreateButton>Create Task</CreateButton>
    </div>
  </div>
)

export default TaskPageHeader;