import React from 'react';
import Editor from '../../../../../../Style/Editor/Editor';
import './NoteInput.scss';

const NoteInput = (props) => (
  <div className="rich-text-input">
    <Editor 
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  </div> 
);

export default NoteInput;