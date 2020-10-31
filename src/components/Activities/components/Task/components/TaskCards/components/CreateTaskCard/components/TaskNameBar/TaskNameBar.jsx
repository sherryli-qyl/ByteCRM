import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle as checkCircleSolid, faCheck } from '@fortawesome/free-solid-svg-icons';
import EditableText from '../../../../../../../../../Style/EditableText';
import './TaskNameBar.scss';

const TaskNameBar = ({
  children,
  status,
  handleUpdate,
}) => {
  let lineThrough = false;
  if (status === 'complete') {
    lineThrough = true;
  }

  return (
    <div className="taskNameBar">
      <div className="taskNameBar__checkCircle">
        {status === 'processing'
          ? (
            <div className="taskNameBar__checkCircle--processing" onClick={() => handleUpdate('complete', 'status')}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )
          : (
            <div className="taskNameBar__checkCircle--complete" onClick={() => handleUpdate('processing', 'status')}>
              <FontAwesomeIcon icon={checkCircleSolid} />
            </div>
          )}
      </div>
      <div className="taskNameBar__nameInput">
        <EditableText lineThrough={lineThrough} content={children} variant="input" onContentChange={(value) => handleUpdate(value, 'name')} />
      </div>
    </div>
  );
};

export default TaskNameBar;
