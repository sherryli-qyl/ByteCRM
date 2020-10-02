import React from 'react';
import EditableText from '../../../../../../../../../../Style/EditableText';
import './NoteBody.scss';

const NoteBody = (props) => {
  return (
    <div className="note-card-body">
      <EditableText
        content={props.content}
        cardKey={props.cardKey}
      />
    </div>
  )
};


export default NoteBody;