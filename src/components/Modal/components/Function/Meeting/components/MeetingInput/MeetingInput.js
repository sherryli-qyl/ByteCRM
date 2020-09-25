import React from 'react';
import "./MeetingInput.scss";
import Editor from"../../../../../../Style/Editor/Editor";




const MeetingInput = (props) => (
    <div >
      <Editor placeholder={props.placeholder}
      />
    </div> 
  );
  
  export default MeetingInput;