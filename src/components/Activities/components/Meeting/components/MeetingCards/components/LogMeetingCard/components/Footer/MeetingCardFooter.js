import React from 'react';
import UserTag from "../../../../../../../../../Style/Tag/User";
import UserIcon from "../../../../../../../../../../img/Contact/profile.png";



const MeetingCardFooter = (props) => (
    <div className='logMeetingCard__footer'>
        <UserTag
            userName={props.userName}
            userIcon={UserIcon}
        />
        <div className='logMeetingCard__footer__label'>
            logged an Meeting
        </div>
    </div>
)

export default MeetingCardFooter;