import React from 'react';
import './CallBody.scss';

const NoteBody = (props) => (
  <div className="note-card-body">
    <textarea placeholder={props.placeholder} rows="3">
      {props.content}
    </textarea>
  </div>
);

export default NoteBody;
