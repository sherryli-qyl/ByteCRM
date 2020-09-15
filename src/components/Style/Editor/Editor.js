import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.scss';





class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {editorHtml: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (text) {
    this.setState({editorHtml: text});
}


  render(){
    return(
      <div className="editor">
         <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            placeholder={this.props.placeholder}
           />
      </div>
    )
  }
}

Editor.modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    ['clean'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'], 
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true,
  },
}

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]



export default Editor


