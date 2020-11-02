import React from 'react';
import Editor from '../../../../../../../Style/Editor/Editor';
import './NoteInput.scss';

const NoteInput = (props) => {
  const { placeholder, handleEditorChange } = props;
  return (
    <div className="rich-text-input">
      <Editor
        placeholder={placeholder}
        handleEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default NoteInput;
