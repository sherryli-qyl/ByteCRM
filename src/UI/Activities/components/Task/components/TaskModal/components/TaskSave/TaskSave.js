import React from 'react';
import ContainedButton from '../../../../../../../Style/Button/Modal/ContainedButton';
import "./TaskSave.scss";

const TaskSave = () => (
  <div className="taskSave">
    <div className="taskSave__save">
      <ContainedButton>
        Send
      </ContainedButton>
    </div>
  </div>
)

export default TaskSave;