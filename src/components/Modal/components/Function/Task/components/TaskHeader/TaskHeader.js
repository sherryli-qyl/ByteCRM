import React from 'react';
import 'date-fns';
import DueDateSelector from './components/DueDateSelector';
import "./TaskHeader.scss"

export default function TaskHeader() {
  return (
    <div className="taskHeader">
      <div className="taskHeader__left">
        <form className='taskHeader__left__form'>
          <input className='taskHeader__left__form__input'
            placeholder='Enter Your task'
          />
        </form>
      </div>
      <div className="taskHeader__right">
        <div className="taskHeader__right__dropDown">
          <span className='taskLabel'>Due Date</span>
          <DueDateSelector />
        </div>
        <div className="taskHeader__right__time">
             8:00 PM
        </div>

      </div>
    </div>
  );
}