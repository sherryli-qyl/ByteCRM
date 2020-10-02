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
        this.onChange = this.onChange.bind(this);
    }

    onChange(time) {
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
                        className={this.props.className}
                        type="time"
                        value={currentTime}
                        onChange={time=>this.onChange(time)}
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