import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TaskFollowSelect from '../../../../../../Style/Select/Activity/';
import "./TaskHeader.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '30%',
    },
  },
}));

export default function TaskHeader() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="taskHeader">
      <div className="taskHeader__left">
        <form className='taskHeader__left__form'
        // onSubmit={this.handleSubmit}
        >
          <input className='taskHeader__left__form__input'
            placeholder='Enter Your task'
          // onChange={this.handleOnchange}
          // onFocus={this.handleFocus}
          // onBlur={this.handleBlur}
          // value={volume}
          />
        </form>
      </div>
      <div className="taskHeader__right">
        <div className="taskHeader__right--left">
          <span className='dueDate'>Due Date</span>
          <TaskFollowSelect />
        </div>

      </div>

      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Due Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Due Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
      </MuiPickersUtilsProvider>   */}
    </div>
  );
}