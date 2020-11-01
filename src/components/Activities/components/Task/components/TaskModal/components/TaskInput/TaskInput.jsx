import React from 'react';
import TypeDropdown from '../../../components/Type';
import PriorityDropdown from '../../../components/Priority';
import UserSelector from '../../../../../../../Selector/UserSelector';
import './TaskInput.scss';

const selectHint = 'Task must have at least one association';
const TaskInput = ({
  handleInput,
  handleRemoveUser,
  handleAddUser,
  userList,
}) => (
  <section className="taskInput">
    <div className="taskInput__top">
      <div className="taskInput__top__item">
        <span className="taskLabel">Type</span>
        <TypeDropdown onTypeChange={(value) => handleInput(value, 'taskType')} />
      </div>
      <div className="taskInput__top__item">
        <span className="taskLabel">Priority</span>
        <PriorityDropdown onPriorityChange={(value) => handleInput(value, 'priority')} />
      </div>
      <div className="taskInput__top__item">
        <span className="taskLabel">Assigned to</span>
        <UserSelector
          userList={userList}
          handleRemoveUser={handleRemoveUser}
          handleAddUser={handleAddUser}
          selectHint={selectHint}
        />
      </div>
    </div>
    <div className="taskInput__bot" />
  </section>
);

export default TaskInput;
