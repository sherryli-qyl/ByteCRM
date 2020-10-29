import 'date-fns';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
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
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    const newDate = transferDateInYearMonDay(date);
    this.setState({
      currentDate: newDate,
    });
    this.props.onDateChange(newDate);
  }

  render() {
    const { currentDate, pickerTheme } = this.state;
    console.log(currentDate);
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme={pickerTheme}>
          <KeyboardDatePicker
            disableToolbar
            clearable
            format="DD/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            value={currentDate}
            onChange={(date) => this.onChange(date)}
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
