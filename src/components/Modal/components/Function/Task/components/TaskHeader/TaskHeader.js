import React from 'react';
import 'date-fns';
import TaskFollowSelect from '../../../../../../Style/Select/Activity/';
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
        <div className="taskHeader__right--left">
          <span className='dueDate'>Due Date</span>
          <TaskFollowSelect />
        </div>

      </div>
    </div>
  );
}