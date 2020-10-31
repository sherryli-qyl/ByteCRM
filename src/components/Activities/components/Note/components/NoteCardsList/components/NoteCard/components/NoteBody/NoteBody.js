import React from 'react';
import EditableText from '../../../../../../../../../Style/EditableText';
import './NoteBody.scss';

const NoteBody = (props) => (
  <div className="note-card-body">
    <EditableText
      content={props.content}
      cardKey={props.cardKey}
      onContentChange={props.onContentChange}
    />
  </div>
);

export default NoteBody;
