import React from 'react';
import ContainedButton from '../../../../../../../../Style/Button/Modal/ContainedButton';
import OutlinedButton from '../../../../../../../../Style/Button/Modal/OutlinedButton';
import "./EmailSendBar.scss"
import Taskfollow from '../../../../../../../Private/TaskFollow';





const EmailSendBar = ({
    children
}) => (
        <div className="emailFooter">
            <div className="emailFooter__send">
                <ContainedButton>
                    Send
                </ContainedButton>
            </div>
            <div className="emailFooter__sendLater">
                <OutlinedButton>
                    Send Later
                </OutlinedButton>
            </div>
            <div className="emailFooter__taskFollow">
                <Taskfollow />
            </div>
        </div>
    )




export default EmailSendBar;