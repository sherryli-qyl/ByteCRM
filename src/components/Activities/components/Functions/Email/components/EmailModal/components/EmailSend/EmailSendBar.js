import React from 'react';
import ContainedButton from '../../../../../../../Style/Button/Modal/ContainedButton';
import OutlinedButton from '../../../../../../../Style/Button/Modal/OutlinedButton';
import "./EmailSendBar.scss"
import Taskfollow from '../../../../../../../Modal/components/Private/TaskFollow';





const EmailSendBar = ({
    children
}) => (
        <div className="emailSendBar">
            <div className="emailSendBar__send">
                <ContainedButton>
                    Send
                </ContainedButton>
            </div>
            <div className="emailSendBar__sendLater">
                <OutlinedButton>
                    Send Later
                </OutlinedButton>
            </div>
            <div className="emailSendBar__taskFollow">
                <Taskfollow />
            </div>
        </div>
    )




export default EmailSendBar;