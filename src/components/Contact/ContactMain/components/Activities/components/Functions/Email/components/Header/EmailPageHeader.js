import React from 'react';
import CreateButton from '../../../../../../../../../Style/Button/Activities/CreateButton';
import LogButton from '../../../../../../../../../Style/Button/Activities/LogButton';
import Text from '../../../../../../../../../Style/Text'
import "./EmailPageHeader.scss";






const EmailPageHeader = () => (
    <div className="emailPage__header">

        <div className="emailPage__header__showReply">
            <button className="replyButton">
                <Text>Show all email replies</Text>
            </button>
        </div>

        <div className="emailPage__header__logEmail">
            <LogButton>Log Email</LogButton>
        </div>

        <div className='emailPage__header__createEmail'>
            <CreateButton>Create Email</CreateButton>
        </div>

    </div>
)



export default EmailPageHeader;