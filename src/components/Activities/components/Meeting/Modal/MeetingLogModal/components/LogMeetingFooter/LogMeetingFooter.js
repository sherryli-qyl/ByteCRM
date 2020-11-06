import React from 'react';
import Button from '../../../../../../../Style/Button/Modal/Button';
import TaskFollow from '../../../../../../Private/TaskFollow';



const LogMeetingFooter = (props) => (
    <div className="meetingFooter">
        <div className="meetingFooter__send">
            <Button size = 'small' 
                    variant = 'contained'
                    btnDisable = {props.btnDisable}
                    onClick = {props.onClick}>
                Log activity
            </Button>
        </div>
        <div className="meetingFooter__taskFollow">
            <TaskFollow />
        </div>
    </div>
)


export default LogMeetingFooter;