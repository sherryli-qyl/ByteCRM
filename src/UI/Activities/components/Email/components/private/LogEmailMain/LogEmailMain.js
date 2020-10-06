import React from 'react';
import DatePicker from '../../../../../../Style/Picker/DatePicker';
import TimePicker from '../../../../../../Style/Picker/TimePicker';
import { transferTimeHHMM } from '../../../../../../services/timeManager';
import ContactSelector from '../../../../../../ContactSelector';
import './LogEmailMain.scss';


const LogEmailCardMain = ({
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
                <ContactSelector/>
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

export default LogEmailCardMain;