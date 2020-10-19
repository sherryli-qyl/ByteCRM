import React from 'react';
import DatePicker from '../../../../../../../../../Style/Picker/DatePicker';
import TimePicker from '../../../../../../../../../Style/Picker/TimePicker';
import TypeDropdown from '../../../../../components/Type';
import PriorityDropdown from '../../../../../TaskModal/components/TaskInput/components/Dropdown/Priority';
import { transferTimeHHMM } from '../../../../../../../../../services/timeManager';
import UserTag from '../../../../../../../../../Style/Tag/User';
import UserIcon from '../../../../../../../../../../img/Contact/profile.png';
import './InputTaskType.scss';

const InputTaskType = ({
  currentTime,
  currentDate,
  onDateChange,
  onTimeChange,
  onTypeChange,
  taskType,
  userName,
}) => (
    <div className="inputTaskType">
      <div className='inputTaskType__content'>
        <div className='inputTaskType__content__block'>
          <div className='inputTaskType__content__block__item'>
            <div className='cardLabel'>
              Assigned to
                </div>
            <UserTag
              userName={"Olivia Hou"}
              userIcon={UserIcon}
            />
          </div>
        </div>
        <div className='inputTaskType__content__block'>
          <div className='inputTaskType__content__block__item'>
            <div className="cardLabel">
              Date
             </div>
            <DatePicker defaultDate={currentDate}
                        onDateChange={onDateChange} />
          </div>
          <div className='inputTaskType__content__block__item'>
            <div className="cardLabel">
              Time
            </div>
            <TimePicker defaultTime={transferTimeHHMM(currentTime)}
                        onTimeChange={onTimeChange} />
          </div>
          <div className='inputTaskType__content__block__item'>
            <div className="cardLabel">
              Type
             </div>
            <TypeDropdown defaultValue={taskType}
                          onTypeChange = {onTypeChange}/>
          </div>
        </div>
        <div className='inputTaskType__content__block'>
          <div className='inputTaskType__content__block__item'>
            <div className="cardLabel">Priority</div>
            <PriorityDropdown />
          </div>
          <div className='inputTaskType__content__block__item'>
            <div className="cardLabel">Created By</div>
            <span>Olivia Hou</span>
          </div>
        </div>
      </div>
    </div>

  )

export default InputTaskType;