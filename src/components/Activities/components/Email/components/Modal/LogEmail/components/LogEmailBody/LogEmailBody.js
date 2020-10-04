import React from 'react';
import Editor from '../../../../../../../../Style/Editor';
import './LogEmailBody.scss';




const LogEmailBody = (props)=>{

    return(
        <div className ='EmailInput'>
            <Editor placeholder= 'Describe the Email'
                    handleEditorChange = {props.handleEditorChange}/>
        </div>
    )
}


export default LogEmailBody;