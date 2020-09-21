import React from 'react';
import UserTag from '../../../../../../../../Style/Tag/User';
import UserIcon from '../../../../../../../../../img/Contact/profile.png';
import './LogMeetingCard.scss';


class LogMeetingCard extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
           
        }
    }

    render() {
      
        return (
            <div className="logMeetingCard">
                <div className='logMeetingCard__content'>
                    {this.props.card.date}
                    <div>test logMeeting Card</div>
                    {this.props.card.time}
                    <div>test logMeeting Card</div>
                    <div>test logMeeting Card</div>
                </div>
                <div className='logMeetingCard__footer'>
                    <UserTag
                        userName={this.props.card.name}
                        userIcon={UserIcon}
                    />
                    <div className='logMeetingCard__footer__label'>
                        logged an Meeting
                    </div>
                </div>

            </div>
        )
    }
}

export default LogMeetingCard;