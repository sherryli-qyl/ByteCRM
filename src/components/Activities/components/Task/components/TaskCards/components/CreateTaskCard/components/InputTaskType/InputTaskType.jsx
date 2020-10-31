import React from 'react';
import DatePicker from '../../../../../../../../../Style/Picker/DatePicker';
import TimePicker from '../../../../../../../../../Style/Picker/TimePicker';
import TypeDropdown from '../../../../../components/Type';
import PriorityDropdown from '../../../../../components/Priority';
import { transferTimeHHMM } from '../../../../../../../../../services/timeManager';
import UserSelector from '../../../../../../../../../Selector/UserSelector/UserSelector';
import './InputTaskType.scss';

const userSelectHint = 'Tasks must have at Least one association';

const InputTaskType = ({
  card,
  currentUser,
  handleUpdate,
  handleAddUser,
  handleRemoveUser,
}) => (
  <div className="inputTaskType">
    <div className="inputTaskType__content">
      <div className="inputTaskType__content__block">
        <div className="inputTaskType__content__block__item">
          <div className="cardLabel">
            Assigned to
          </div>
          <UserSelector
            userList={card.users}
            currentUser={currentUser}
            contactSelectHint={userSelectHint}
            handleAddUser={handleAddUser}
            handleRemoveUser={handleRemoveUser}
          />
        </div>
      </div>
      <div className="inputTaskType__content__block">
        <div className="inputTaskType__content__block__item">
          <div className="cardLabel">
            Date
          </div>
          <DatePicker
            defaultDate={card.currentDate}
            onDateChange={(date) => handleUpdate(date, 'date')}
          />
        </div>

        <div className="inputTaskType__content__block__item">
          <div className="cardLabel">
            Time
          </div>
          <TimePicker
            defaultTime={transferTimeHHMM(card.time)}
            onTimeChange={(time) => handleUpdate(time, 'time')}
          />
        </div>

        <div className="inputTaskType__content__block__item">
          <div className="cardLabel">Type</div>
          <TypeDropdown
            defaultValue={card.taskType}
            onTypeChange={(taskType) => handleUpdate(taskType, 'taskType')}
          />
        </div>
      </div>

      <div className="inputTaskType__content__block">
        <div className="inputTaskType__content__block__item">
          <div className="cardLabel">Priority</div>
          <PriorityDropdown
            defaultValue={card.priority}
            onPriorityChange={(priority) => handleUpdate(priority, 'priority')}
          />
        </div>

        <div className="inputTaskType__content__block__item">
          <div className="cardLabel">Created By</div>
          <span className="spanText">{card.createdBy.fullName}</span>
        </div>
      </div>
    </div>
  </div>

);

export default InputTaskType;
