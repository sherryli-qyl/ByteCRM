import React from 'react';
import EditableText from '../../../../../../../../../Style/EditableText';

const EmailCardHeader = (props) => (
  <div className="emailCardHeader">
    <EditableText
      content={props.description}
      cardKey={props.cardKey}
      onContentChange={props.onContentChange}
      placeholder="Description..."
    />
  </div>
);

export default EmailCardHeader;
