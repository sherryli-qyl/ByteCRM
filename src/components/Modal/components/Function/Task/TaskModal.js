import React from 'react'
import TaskHeader from './components/TaskHeader'
import TaskEditor from './components/TaskEditor'
import TaskSave from './components/TaskSave'
import TaskInput from './components/TaskInput';
import "./TaskModal.scss";


const TaskModal = () => (
  <section className="taskModal">
    <TaskHeader />
    <TaskEditor />
    <TaskInput />
    <TaskSave />
  </section>
);

export default TaskModal;
