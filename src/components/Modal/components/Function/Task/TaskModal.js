import React from 'react'
import TaskHeader from './components/TaskHeader'
import TaskEditor from './components/TaskEditor'
import TaskSave from './components/TaskSave'
import TaskInput from './components/TaskInput';
import "./TaskModal.scss";


const TaskModal = () => (
  <div className="taskModal">
    <TaskHeader />
    <TaskEditor />
    <TaskInput />
    <TaskSave />  
  </div>
);

export default TaskModal;
