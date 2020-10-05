import React from 'react'
import TaskHeader from './components/TaskHeader'
import TaskEditor from './components/TaskEditor'
import TaskSave from './components/TaskSave'
import TaskInput from './components/TaskInput';
import "./TaskModal.scss";

class TaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "08:00 AM",
    }
    this.onTimeChange = this.onTimeChange.bind(this);
  }
 

  onTimeChange(newTime){
     this.setState({
       currentTime:newTime,
     })
     console.log("time " + newTime);
  }

  render() {
    const {currentTime} = this.state;
    return (
      <div className="taskModal">
        <TaskHeader defaultTime={currentTime} 
                    onTimeChange = {this.onTimeChange}
        />
        <TaskEditor />
        <TaskInput />
        <TaskSave />
      </div>
    )
  }
}





export default TaskModal;
