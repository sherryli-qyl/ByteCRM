import React from 'react';
import Editor from '../../../../../../../Style/Editor';
import './LogMeetingBody.scss';

const LogMeetingBody = (props) => (
  <div className="MeetingInput">
    <Editor
      placeholder="Describe the Meeting"
      handleEditorChange={props.handleEditorChange}
    />
  </div>
);

export default LogMeetingBody;
