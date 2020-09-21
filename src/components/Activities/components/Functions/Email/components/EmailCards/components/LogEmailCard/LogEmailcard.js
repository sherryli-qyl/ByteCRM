import React from 'react';
import UserTag from '../../../../../../../../Style/Tag/User';
import UserIcon from '../../../../../../../../../img/Contact/profile.png';
import DatePicker from '../../../../../../../../Style/Picker/DatePicker';

import './LogEmailCard.scss';


class LogEmailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate:this.props.card.date,
        }
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date){
      const newDate = date;
      this.setState({
          currentDate:newDate,
      })
      console.log(this.props.card.date);
    }

    render() {
      const {currentDate} = this.state;
        return (
            <div className="logEmailCard">
                <div className='logEmailCard__content'>
                    {this.props.card.time}
                    {currentDate}
                    <div>test logEmail Card</div>
                    
                    <DatePicker defaultDate={currentDate}
                                onDateChange={this.onDateChange}/>
                    <div>test logEmail Card</div>
                    <div>test logEmail Card</div>
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