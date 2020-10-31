import React from 'react';
import DueDateSelector from './components/DueDateSelector';
import Timepicker from '../../../../../../../Style/Picker/TimePicker';
import { transferTimeHHMM } from '../../../../../../../services/timeManager';
import './TaskHeader.scss';

const TaskHeader = ({
  defaultTime,
  handleInput,
}) => (
  <div className="taskHeader">
    <div className="taskHeader__left">
      <form className="taskHeader__left__form">
        <input
          className="taskHeader__left__form__input"
          onChange={(event) => {
            event.preventDefault();
            handleInput(event.target.value, 'name');
          }}
          placeholder="Enter Your task"
        />
      </form>
    </div>
    <div className="taskHeader__right">
      <div className="taskHeader__right__dropDown">
        <span className="taskLabel">Due Date</span>
        <DueDateSelector onChangeValue={(value) => handleInput(value, 'date')} />
      </div>
      <div className="taskHeader__right__time">
        <Timepicker
          className="taskTime"
          defaultTime={transferTimeHHMM(defaultTime)}
          onTimeChange={(value) => handleInput(value, 'time')}
        />
      </div>
    </div>
  </div>
);

export default TaskHeader;
