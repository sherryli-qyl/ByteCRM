import React from 'react';
import EditableText from '../../../../../../../../../Style/EditableText';


const EmailCardHeader = (props) => {

    return (
        <div className="emailCardHeader">
            <EditableText
                content={props.description}
                cardKey={props.cardKey}
                placeholder = {"Description..."}
            />
        </div>
    )
}

export default EmailCardHeader;