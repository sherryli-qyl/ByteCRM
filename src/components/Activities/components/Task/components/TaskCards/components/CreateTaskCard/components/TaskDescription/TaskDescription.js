import React from 'react';
import EditableText from '../../../../../../../../../Style/EditableText';
import "./TaskDescription.scss"

const TaskDescription = (props) => {
  return(
    <div className="taskDescription">        
          <EditableText 
            content={props.description}
            cardKey={props.cardKey}
            onContentChange={props.onContentChange}
            placeholder = {"Add description"}
          />
        
    </div>
  )    
}


export default TaskDescription;