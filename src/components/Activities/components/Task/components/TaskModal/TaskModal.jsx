import React from 'react';
import TaskHeader from './components/TaskHeader';
import TaskEditor from './components/TaskEditor';
import TaskSave from './components/TaskSave';
import TaskInput from './components/TaskInput';
import Task from './components/Task';
import { PostTask } from '../../../../../Api/Task/Task';
import store from '../../../../../../store';
import { saveAction } from '../../../../../../action';
import InputValidation from '../../../../../../utils/InputValidation';
import { transferDateInYearMonDay } from '../../../../../../lib/date';
import './TaskModal.scss';

// name, type, status, relatedTo, description, time , date, taskType, priority, createdBy

const user = JSON.parse(localStorage.getItem('user'));
const currentDate = transferDateInYearMonDay(new Date());
let assignedUsers = [];
let users = [];
assignedUsers.push(user);
users.push(user.id);

class TaskModal extends React.Component {
  constructor(props) {
    super(props);
    const relatedTo = sessionStorage.getItem('id');
    const task = new Task('', 'Task', 'processing', relatedTo, '', '08:00 AM', currentDate, 'To-do', 'none', users, user.id);
    this.state = {
      currentTime: '08:00 AM',
      currentDate,
      task,
      users,
      assignedUsers,
      disable: true,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
    this.handleClickSaveBtn = this.handleClickSaveBtn.bind(this);
  }

  handleAddUser(id) {
    const newUsers = this.state.users;
    newUsers.push(id);
    this.handleInput(newUsers, 'users');
  }

  handleRemoveUser(id) {
    const newUsers = this.state.users;
    for (const i in newUsers) {
      if (newUsers[i] === id) {
        newUsers.splice(i, 1);
      }
    }
    this.handleInput(newUsers, 'users');
  }

  handleInput(value, key) {
    let newTask = this.state.task;
    newTask[key] = value;
    console.log(newTask);
    if (newTask.name) {
      this.setState({
        task: newTask,
        disable: false,
      });
    } else {
      this.setState({
        task: newTask,
        disable: true,
      });
    }
  }

  handleClickSaveBtn() {
    if (InputValidation(this.state.task.description) && this.state.users.length > 0) {
      const body = this.state.task;
      const res = PostTask(body);
      res.then((value) => {
        if (value.statusText === 'OK') {
          const action = saveAction(value.data);
          store.dispatch(action);
          this.props.modalController.close();
        }
      }).catch((error) => {
        console.log('Unexpected Error');
        throw error;
      });
    }
  }

  render() {
    const {
      currentTime, currentDate, assignedUsers, disable,
    } = this.state;
    return (
      <div className="taskModal">
        <TaskHeader
          defaultTime={currentTime}
          currentDate={currentDate}
          handleInput={this.handleInput}
        />
        <TaskEditor handleInput={this.handleInput} />
        <TaskInput
          handleInput={this.handleInput}
          handleAddUser={this.handleAddUser}
          handleRemoveUser={this.handleRemoveUser}
          userList={assignedUsers}
        />
        <TaskSave
          disable={disable}
          handleClickSaveBtn={this.handleClickSaveBtn}
        />
      </div>
    );
  }
}

export default TaskModal;
