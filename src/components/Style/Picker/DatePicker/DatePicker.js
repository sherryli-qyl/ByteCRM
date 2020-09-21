import 'date-fns';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { transferDateInYearMonDay } from '../../../services/DateManager';
import DatePickerTheme from './theme/DatePickerTheme';
import './DatePicker.scss';


class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    const pickerTheme = DatePickerTheme;
    this.state = {
      pickerTheme,
      currentDate: this.props.defaultDate,
      
    }
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    const newDate = transferDateInYearMonDay(date);
    this.props.onDateChange(newDate);
    this.setState({
      currentDate: newDate,
    })
  }

  render() {
    const { currentDate, pickerTheme} = this.state
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={pickerTheme}>
          <KeyboardDatePicker 
            disableToolbar
            clearable
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date"
            value={currentDate}
            onChange={date => this.onDateChange(date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    );
  }
}
export default DatePicker;
