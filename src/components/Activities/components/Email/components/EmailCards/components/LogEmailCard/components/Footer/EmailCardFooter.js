import React from 'react';
import UserTag from '../../../../../../../../../Style/Tag/User';
import UserIcon from '../../../../../../../../../../img/Contact/profile.png';



const EmailCardFooter = (props) => (
    <div className='logEmailCard__footer'>
        <UserTag
            userName={props.userName}
            userIcon={UserIcon}
        />
        <div className='logEmailCard__footer__label'>
            logged an Email
        </div>
    </div>
)

export default EmailCardFooter;