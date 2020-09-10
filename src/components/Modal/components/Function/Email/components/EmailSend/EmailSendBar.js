import React from 'react';
import ContainedButton from '../../../../../../Style/Button/ContainedButton';
import OutlinedButton from '../../../../../../Style/Button/OutlinedButton';
import TaskFollow from '../../../../../../Style/CheckBox';
import "./EmailSendBar.scss"
import Taskfollow from '../../../../../../Style/CheckBox';





const EmailSendBar = ({
    children
}) => (
        <div className="emailSendBar">
            <div className="emailSendBar__send">
                <ContainedButton className="emailSendBar__send__button">
                    Send
                </ContainedButton>
            </div>
            <div className="emailSendBar__sendLater">
                <OutlinedButton className='emailSendBar__sendLater__button'>
                    Send Later
                </OutlinedButton>
            </div>
            <div className="emailSendBar__taskFollow">
                <Taskfollow />
            </div>
        </div>
    )




export default EmailSendBar;