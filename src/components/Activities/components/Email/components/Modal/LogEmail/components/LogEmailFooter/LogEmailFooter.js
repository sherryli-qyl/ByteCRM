import React from 'react';
import Button from '../../../../../../../../Style/Button/Modal/Button';
import TaskFollow from '../../../../../../../Private/TaskFollow';



const LogEmailFooter = () => (
    <div className="emailFooter">
        <div className="emailFooter__send">
            <Button size = 'small' 
                    variant = 'contained'>
                Log activity
            </Button>
        </div>
        <div className="emailFooter__taskFollow">
            <TaskFollow />
        </div>
    </div>
)


export default LogEmailFooter;