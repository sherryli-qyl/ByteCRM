import React from 'react';
import TextField from '@material-ui/core/TextField';


/*export default function MeetingTitle() {
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
}*/

class MeetingTitle extends React.Component{
    constructor(props){
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }


    handleOnChange = event => {
        //console.log('title');
        //console.log(event.target.value);
        this.props.onTitleChange(event.target.value);
      };

    render(){
        return(
            <div className="border-bottom">
                <TextField 
                    autoFocus
                    margin="dense"
                    id="name"
                    placeholder="what are you meeting for?"
                    type="meeting"
                    fullWidth
                    onChange={this.handleOnChange}
                />
            </div>
        );

    }
} 

export default MeetingTitle;
