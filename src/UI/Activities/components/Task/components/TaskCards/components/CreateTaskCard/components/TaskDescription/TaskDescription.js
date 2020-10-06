import React from 'react';
import EditableText from '../../../../../../../../../Style/EditableText';


const TaskDescription = (props) => {
  return(
    <div className="taskDescription">        
          <EditableText 
            content={props.description}
            cardKey={props.cardKey}
            placeholder = {"Add description"}
          />
        
    </div>
  )    
}


export default TaskDescription;