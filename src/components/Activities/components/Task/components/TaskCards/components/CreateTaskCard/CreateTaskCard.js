import React from 'react';
import './CreateTaskCard.scss';
import InputTaskType from './components/InputTaskType';
import TaskDescription from './components/TaskDescription';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class CreateTaskCard extends React.Component {
  constructor(props) {
    super(props);
    const { key, description } = this.props.card;
    this.state = {
      currentDate: this.props.card.date,
      currentTime: this.props.card.time,
      cardKey: key,
      description,
    }
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onDateChange(date) {
    const newDate = date;
    this.setState({
        currentDate: newDate,
    })
    console.log(this.props.card.date);
  }

  onTest(date) {
    const newDate = date;
    this.setState({
        currentDate: newDate,
    })
    console.log(date)
  }

  onTimeChange(time){
      const newTime = time;
      this.setState({
          currentTime: newTime,
      })
      console.log(newTime);
  }
    render() {
      const { currentDate, currentTime, cardKey, description } = this.state;
        return (
          <div className="createTaskCard">
            <InputTaskType 
              currentDate={currentDate}
              currentTime={currentTime}
              onTimeChange={this.onTimeChange}
              onDateChange={this.onDateChange} 
            />
            <div className="createTaskCard__footer">
            {description?
              <TaskDescription 
                cardKey={cardKey}
                description={description} />
                : ""
            } 
            </div>
          </div>
        )
    }
}

export default CreateTaskCard;