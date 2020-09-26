import React from 'react';

import DatePicker from '../../../../../../../../Style/Picker/DatePicker';
import TimePicker from '../../../../../../../../Style/Picker/TimePicker';
import TypeDropdown from '../../../../../../../../Modal/components/Function/Task/components/TaskInput/components/Dropdown/Type';

import PriorityDropdown from '../../../../../../../../Modal/components/Function/Task/components/TaskInput/components/Dropdown/Priority';
import {transferTimeHHMM} from '../../../../../../../../services/timeManager';
import EditableText from '../../../../../../../../Style/EditableText';
import './CreateTaskCard.scss';

class CreateTaskCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentDate: this.props.card.date,
          currentTime: this.props.card.time,
          taskContent: this.props.content
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onDateChange(date) {
      const newDate = date;
      this.setState({
          currentDate: newDate,
      })
    }

    onTimeChange(time){
        const newTime = time;
        this.setState({
            currentTime: newTime,
        })
        console.log(newTime);
    }

    render() {
      const { currentDate, currentTime, taskContent } = this.state;
        return (
          <div className="createTaskCard">
          <div className='createTaskCard__content'>          
              <div className="createTaskCard__content__input">
                <div className='createTaskCard__content__input__picker'>
									<DatePicker defaultDate={currentDate}
										onDateChange={this.onDateChange} />
                </div>
                <div className='createTaskCard__content__input__picker'>
									<TimePicker defaultTime={transferTimeHHMM(currentTime)} 
									label='Time'
									onTimeChange={this.onTimeChange}/>
                </div>
                <div className='createTaskCard__content__input__picker'>
                  <span className='createTaskCard__content__input__picker__label'>Type</span>
                  <TypeDropdown />
                </div>
                <div className='createTaskCard__content__input__picker'>
                  <span className='createTaskCard__content__input__picker__label'>Priority</span>
                  <PriorityDropdown />
                </div>
              </div>
              <div className="createTaskCard__content__description">
                <EditableText 
                  content={taskContent}
                />
              </div>
          </div>
      </div>
        )
    }
}

export default CreateTaskCard;