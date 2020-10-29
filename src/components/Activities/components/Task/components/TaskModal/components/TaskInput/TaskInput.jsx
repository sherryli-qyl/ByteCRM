import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TypeDropdown from '../../../components/Type';
import PriorityDropdown from '../../../components/Priority';
import './TaskInput.scss';

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
        <div className="taskInput__top">
          <div className="taskInput__top__item">
            <span className="taskLabel">Type</span>
            <TypeDropdown />
          </div>
          <div className="taskInput__top__item">
            <span className="taskLabel">Priority</span>
            <PriorityDropdown />
          </div>
          <div className="taskInput__top__item">
            <span className="taskLabel">Assigned to</span>
          </div>
        </div>
        <div className="taskInput__bot" />
      </div>
    </section>
  );
}
