import React from 'react';
import Editor from '../../../../../../../Style/Editor/Editor';
import './TaskEditor.scss';

const TaskEditor = ({
  children,
  handleInput,
}) => (

  <div className="taskEditor">
    <Editor
      placeholder="Note..."
      handleEditorChange={(value) => handleInput(value, 'description')}
    />
  </div>

);

export default TaskEditor;
