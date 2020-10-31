import React from 'react';
import Button from '../../../../../../../Style/Button/Modal/Button';
import Taskfollow from '../../../../../../Private/TaskFollow';
import './NoteSaveBar.scss';

const NoteSaveBar = (props) => (
  <div className="note-save-bar">
    <div className="note-save-bar__save">
      <Button
        size="small"
        variant="contained"
        onClick={props.onClick}
        btnDisable={props.btnDisable}
      >
        Save
      </Button>
    </div>
    <div className="note-save-bar__task-follow">
      <Taskfollow />
    </div>
  </div>
);

export default NoteSaveBar;
