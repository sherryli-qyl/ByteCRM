import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}));

export default function MeetingInput() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder="What are you meeting about?" inputProps={{ 'aria-label': 'description' }} fullWidth='true' />
    </form>
  );
}