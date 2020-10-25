import React from 'react';
import EditableText from '../../../../../../../../../Style/EditableText';


const MeetingCardHeader = (props) => {

    return (
        <div className="meetingCardHeader">
            <EditableText
                content={props.description}
                cardKey={props.cardKey}
                onContentChange = {props.onContentChange}
                placeholder = {"Description..."}
            />
        </div>
    )
}

export default MeetingCardHeader;


