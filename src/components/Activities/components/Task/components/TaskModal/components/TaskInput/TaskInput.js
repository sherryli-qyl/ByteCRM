import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AssignedUserSelector from './components/AssignedUserSelector';
import EmailReminderSelector from './components/EmailReminderSelector';
import QueueSelector from './components/QueueSelector';
import TypeDropdown from './components/Dropdown/Type';
import PriorityDropdown from './components/Dropdown/Priority';
import "./TaskInput.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0.5,
  },
}));

export default function TaskInput() {
  const classes = useStyles();

  return (
    <section className="taskInput">
      <div className={classes.root}>
        <div className='taskInput__top'>
          <div className='taskInput__top__item'>
            {/* <TypeSelector /> */}
            <span className="taskLabel" >Type</span>
            <TypeDropdown/>
          </div>
          {/* <Grid container spacing={0}>
          <Grid item xs={2}> */}
          <div className='taskInput__top__item'>
            <span className="taskLabel">Priority</span>
            <PriorityDropdown/>
            {/* <PrioritySelector /> */}
          </div>
          {/* </Grid>
          <Grid item xs={2}> */}
          <div className='taskInput__top__item'>
            <span className="taskLabel">Assigned to</span>
            {/* <AssignedUserSelector /> */}
          </div>
          {/* </Grid>
          <Grid item xs={6}> */}
          {/* </Grid>
        </Grid> */}
        </div>
        <div className='taskInput__bot'>
          {/* <Grid container spacing={0}>
          <Grid item xs={2}> */}
          {/* <QueueSelector /> */}
          {/* </Grid>
          <Grid item xs={9}> */}
          {/* <EmailReminderSelector /> */}
        </div>
        {/* </Grid>
        </Grid> */}
      </div>
    </section>
  );
}