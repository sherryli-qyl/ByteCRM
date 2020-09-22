import 'date-fns';
import React from 'react';
import { ThemeProvider, } from '@material-ui/core/styles';
import timepicker from './theme/TimepickerTheme';
import TextField from '@material-ui/core/TextField';



class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        const pickerTheme = timepicker ;
        this.state = {
            pickerTheme,
            currentTime: this.props.defaultTime,

        }
        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onTimeChange(time) {
        const newTime = time.target.value;
        this.props.onTimeChange(newTime);
        this.setState({
            currentTime: newTime,
        })
        
    }

    render() {
        const {  currentTime, pickerTheme } = this.state
        return (
                <ThemeProvider theme={pickerTheme}>
                    <TextField
                        id="time"
                        label={this.props.label}
                        className={this.props.className}
                        type="time"
                        defaultValue={ currentTime}
                        value={currentTime}
                        onChange={time=>this.onTimeChange(time)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </ThemeProvider>
          
        );
    }
}
export default TimePicker;