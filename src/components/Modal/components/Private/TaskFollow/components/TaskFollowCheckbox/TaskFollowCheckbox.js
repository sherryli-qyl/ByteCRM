import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


const TaskFollowCheckbox = ({
    checked,
    onChange,
}) => (
        <Checkbox
            checked={checked}
            onChange={onChange}
            color={'primary'}
            inputProps={{ 'aria-label': 'primary checkbox'}}
        />

    )

export default TaskFollowCheckbox;