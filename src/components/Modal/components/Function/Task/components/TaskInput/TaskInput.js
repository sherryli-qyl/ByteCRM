import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TypeSelector from './components/TypeSelector';
import AssignedUserSelector from './components/AssignedUserSelector';
import EmailReminderSelector from './components/EmailReminderSelector';
import PrioritySelector from './components/PrioritySelector';
import QueueSelector from './components/QueueSelector';
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
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <TypeSelector />
          </Grid>
          <Grid item xs={2}>
            <PrioritySelector />
          </Grid>
          <Grid item xs={6}>
            <AssignedUserSelector />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <QueueSelector />
          </Grid>
          <Grid item xs={9}>
            <EmailReminderSelector />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}