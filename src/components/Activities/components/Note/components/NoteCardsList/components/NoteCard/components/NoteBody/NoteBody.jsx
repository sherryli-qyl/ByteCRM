import React from 'react';
import PropTypes from 'prop-types';
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

NoteBody.defaultProps = {
  onContentChange: () => {},
  content: undefined,
  cardKey: null,
};

NoteBody.propTypes = {
  onContentChange: PropTypes.func,
  content: PropTypes.string,
  cardKey: PropTypes.number,
};

export default NoteBody;
