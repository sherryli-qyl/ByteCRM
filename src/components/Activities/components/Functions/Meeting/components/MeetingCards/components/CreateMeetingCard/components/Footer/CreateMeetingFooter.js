import React from 'react';
import UserTag from '../../../../../../../../../../Style/Tag/User';
import UserIcon from '../../../../../../../../../../../img/Contact/profile.png';



const CreateMeetingFooter = (props) => (
    <div className='createMeetingCard__footer'>
        <UserTag
            userName={props.userName}
            userIcon={UserIcon}
        />
        <div className='createMeetingCard__footer__label'>
            scheduled an Meeting
        </div>
    </div>
)

export default CreateMeetingFooter;