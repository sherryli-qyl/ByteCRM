import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function MeetingTitle() {
    return(
        <div className="border-bottom">
            <TextField 
                autoFocus
                margin="dense"
                id="name"
                placeholder="what are you meeting for?"
                type="meeting"
                fullWidth
            />
        </div>
    );
}

/*const MeetingTitle = ({
    onTitleChange,
}) => ( <div className="border-bottom">
<TextField 
    autoFocus
    margin="dense"
    id="name"
    placeholder="what are you meeting for?"
    type="meeting"
    fullWidth
/>
</div>)

export default MeetingTitle;*/
