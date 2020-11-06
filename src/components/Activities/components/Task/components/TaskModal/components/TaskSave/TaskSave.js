import React from 'react';
import Button from '../../../../../../../Style/Button/Modal/Button';
import './TaskSave.scss';

const TaskSave = ({
  disable,
  handleClickSaveBtn,
}) => (
  <div className="taskSave">
    <div className="taskSave__save">
      <Button
        size="small"
        variant="contained"
        btnDisable={disable}
        onClick={handleClickSaveBtn}
      >
        Save Task
      </Button>
    </div>
  </div>
);

export default TaskSave;
