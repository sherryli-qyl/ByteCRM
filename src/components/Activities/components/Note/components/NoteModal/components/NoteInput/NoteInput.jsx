import React from 'react';
import PropTypes from 'prop-types';
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

NoteInput.defaultProps = {
  handleEditorChange: () => {},
  placeholder: undefined,
};

NoteInput.propTypes = {
  handleEditorChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default NoteInput;
