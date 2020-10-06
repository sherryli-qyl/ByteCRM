import React from 'react';
import DatePicker from '../../../../../../../../../Style/Picker/DatePicker';
import TimePicker from '../../../../../../../../../Style/Picker/TimePicker';
import TypeDropdown from '../../../../../TaskModal/components/TaskInput/components/Dropdown/Type';
import PriorityDropdown from '../../../../../TaskModal/components/TaskInput/components/Dropdown/Priority';
import {transferTimeHHMM} from '../../../../../../../../../services/timeManager';
import UserTag from '../../../../../../../../../Style/Tag/User';
import UserIcon from '../../../../../../../../../../img/Contact/profile.png';
import './InputTaskType.scss';

const InputTaskType = ({
  currentTime,
  currentDate,
  onDateChange,
  onTimeChange,
  userName,
}) => (
        <div className="inputTaskType">
          <div className='inputTaskType__content'>          
            <div className='inputTaskType__content__input'>
              <div className='inputTaskType__content__input__picker'>
                <UserTag
                  userName={userName}
                  userIcon={UserIcon}
                />
              </div>
              <div className='inputTaskType__content__input__picker'>
                <div className="cardLabel">
                  Date
                </div>
                <DatePicker defaultDate={currentDate}
                  onDateChange={onDateChange} />
              </div>
              <div className='inputTaskType__content__input__picker'>
                <div className="cardLabel">
                  Time
                </div>
                <TimePicker defaultTime={transferTimeHHMM(currentTime)} 
                  onTimeChange={onTimeChange} />
              </div>
              <div className='inputTaskType__content__input__picker'>
                <span className="cardLabel">Type</span>
                <TypeDropdown />
              </div>
              <div className='inputTaskType__content__input__picker'>
                <span className="cardLabel">Priority</span>
                <PriorityDropdown />
              </div>
              <div className='inputTaskType__content__input__picker'>
                <div className="cardLabel">
                  Created by
                </div>
                <div className='inputTaskType__content__input__text'>
                   <span>Olivia Hou</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      )

export default InputTaskType;