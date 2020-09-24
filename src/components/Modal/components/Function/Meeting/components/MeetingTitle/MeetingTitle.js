import React from 'react';
import TextField from '@material-ui/core/TextField';
import { BottomNavigation } from '@material-ui/core';


export default function MeetingTitle() {
    return(
        <div className="border-bottom">
            <TextField 
                autoFocus
                margin="dense"
                id="name"
                placeholder="what are you meeting for?"
                type="email"
                fullWidth
            />
        </div>
    );
}
