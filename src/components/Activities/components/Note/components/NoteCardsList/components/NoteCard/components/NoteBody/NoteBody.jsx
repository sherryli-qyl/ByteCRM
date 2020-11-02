import React from 'react';
import EditableText from '../../../../../../../../../Style/EditableText';
import './NoteBody.scss';

const NoteBody = (props) => {
  const { content, cardKey, onContentChange } = props;
  return (
    <div className="note-card-body">
      <EditableText
        content={content}
        cardKey={cardKey}
        onContentChange={onContentChange}
      />
    </div>
  );
};

export default NoteBody;
