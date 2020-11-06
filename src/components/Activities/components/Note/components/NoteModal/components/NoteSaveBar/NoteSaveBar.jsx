import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../../../Style/Button/Modal/Button';
// import Taskfollow from '../../../../../../Private/TaskFollow';
import './NoteSaveBar.scss';

const NoteSaveBar = (props) => {
  const { onClick, btnDisable } = props;

  return (
    <div className="note-save-bar">
      <div className="note-save-bar__save">
        <Button
          size="small"
          variant="contained"
          onClick={onClick}
          btnDisable={btnDisable}
        >
          Save
        </Button>
      </div>
      {/* <div className="note-save-bar__task-follow">
        <Taskfollow />
      </div> */}
    </div>
  );
};

NoteSaveBar.defaultProps = {
  onClick: () => {},
  btnDisable: true,
};

NoteSaveBar.propTypes = {
  onClick: PropTypes.func,
  btnDisable: PropTypes.bool,
};

export default NoteSaveBar;
