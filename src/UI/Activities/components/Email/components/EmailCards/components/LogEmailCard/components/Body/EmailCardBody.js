import React from 'react';
import DatePicker from '../../../../../../../../../Style/Picker/DatePicker';
import TimePicker from '../../../../../../../../../Style/Picker/TimePicker';
import { transferTimeHHMM } from '../../../../../../../../../services/timeManager';
import './EmailCardBody.scss';


const LogEmailCardBody = ({
    currentTime,
    currentDate,
    onDateChange,
    onTimeChange,
}) => (
        <div className="emailCardBody">
            <div className='emailCardBody__container'>
                <div className="cardLabel">
                    Contacted
                </div>
                <div className='emailCardBody__container__text'>
                   <span>0 Contacts</span>
                </div>
            </div>
            <div className='emailCardBody__container'>
                <div className="cardLabel">
                    Date
                </div>
                <div className='emailCardBody__container__picker'>
                    <DatePicker defaultDate={currentDate}
                        onDateChange={onDateChange}
                    />
                </div>
            </div>
            <div className='emailCardBody__container'>
                <div className="cardLabel">
                    Time
                </div>
                <div className='emailCardBody__container__picker'>
                    <TimePicker defaultTime={transferTimeHHMM(currentTime)}
                        onTimeChange={onTimeChange} />
                </div>
            </div>
        </div>
    )

export default LogEmailCardBody;