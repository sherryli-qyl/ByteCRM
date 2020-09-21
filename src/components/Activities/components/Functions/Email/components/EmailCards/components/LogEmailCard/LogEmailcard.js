import React from 'react';
import UserTag from '../../../../../../../../Style/Tag/User';
import UserIcon from '../../../../../../../../../img/Contact/profile.png';
import DatePicker from '../../../../../../../../Style/Picker/DatePicker';
import TimePicker from '../../../../../../../../Style/Picker/TimePicker';

import './LogEmailCard.scss';


class LogEmailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: this.props.card.date,
            currentTime: this.props.card.time
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

    onTimeChange(time){
        const newTime = time;
        this.setState({
            currentTime: newTime,
        })
        console.log(newTime);
    }

    render() {
        const { currentDate, currentTime } = this.state;
        return (
            <div className="logEmailCard">
                <div className='logEmailCard__content'>
                    {currentTime}
                    {currentDate}
                    <div className="logEmailCard__content__input">
                        <div className='logEmailCard__content__input__picker'>
                            <DatePicker defaultDate={currentDate}
                                onDateChange={this.onDateChange} />
                        </div>
                        <div className='logEmailCard__content__input__picker'>
                            <TimePicker defaultTime={currentTime} 
                             onTimeChange={this.onTimeChange}/>
                        </div>
                    </div>
                </div>
                <div className='logEmailCard__footer'>
                    <UserTag
                        userName={this.props.card.name}
                        userIcon={UserIcon}
                    />
                    <div className='logEmailCard__footer__label'>
                        logged an Email
                    </div>
                </div>

            </div>
        )
    }
}

export default LogEmailCard;