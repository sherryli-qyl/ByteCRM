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
import {datePicker} from '../../Theme/MatUITheme';
import './DatePicker.scss';



const useStyles = makeStyles({
  root: {
   width: '100px',
  },
});


class DatePickers extends React.Component {
  constructor(props) {
    super(props);
    const pickerTheme = datePicker;
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

// export default function DatePickers(props) {
  
//   const [selectedDate, setSelectedDate] = React.useState(new Date('2020-09-18T21:11:54'));
//   const pickerTheme = datePicker;
//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
//   const classes = useStyles();

//   return (
//     <ThemeProvider theme={pickerTheme}>
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
     
//         <KeyboardDatePicker className={classes.root}
//           disableToolbar
//           clearable
//           format="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date"
//           value={props.defaultDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
    
//     </MuiPickersUtilsProvider>
//     </ThemeProvider>
//   );
// }

export default DatePickers;
