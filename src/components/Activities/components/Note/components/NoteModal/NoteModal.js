import React from 'react';
import './NoteModal.scss';
import './components/NoteInput';
import NoteSaveBar from './components/NoteSaveBar';
import NoteInput from './components/NoteInput/NoteInput';
// import axios from 'axios';
import { AddNote, GetNoteByRelatedToId } from '../../../../../Api/Note/Note';


class NoteModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      createdBy: '5f6fda5a99f207748e5905fa',
      content: '',
      relatedTo: '5f7c1fa07ed22f05ec4ec31a',
      btnDisable: true,
    }
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleClickSaveBtn = this.handleClickSaveBtn.bind(this);
  }

  handleEditorChange(content) {
    if (this.checkValidation(content)){
      this.setState({
        content: content,
        btnDisable: false
      })
    }
    else{
      this.setState({
        content: content,
        btnDisable: true,
      })
    }
  }

  // handleNoteCreate = () => {
  //   const note = { ...this.state };
  //   this.setState(() => {
  //     AddNote(note)
  //       .then(newNote => {
  //           this.props.history.push(`http://localhost:3000/api/notes/${newNote.Id}`);
  //       })
  //       .catch(error => this.setState({ error }));
  //   });
  // }


  checkValidation(text){
    if (text !== '<p><br></p>'){
      return true
    }
    else{
      return false; 
    }
  } 

  handleClickSaveBtn(){
    const {content, createdBy, relatedTo} = this.state;
      if (this.checkValidation(content)){
        const body = {
          content: content,
          createdBy: createdBy,
          type:'Note',
          isDeleted: false,
          relatedTo: relatedTo,
        }
        const res = AddNote(body);
        res.then(value=>{
          if (value) {
              console.log("Note created successfully");
              //this.props.contactData.close();
          } else {
              console.log("Unexpected Error");
          }
        })
      } else {
        return;
      }
  }
  

  render() {
    const { btnDisable } = this.state;
    return (
      <section id="NoteModal" className="NoteModal">
        <div className="note-input">
          <NoteInput 
            placeholder="Start typing to leave a note..."
            handleEditorChange={this.handleEditorChange}
          />
        </div>
        <div className="note-container-footer">
          <NoteSaveBar 
            onClick={this.handleClickSaveBtn} 
            btnDisable = {btnDisable} />
        </div>
      </section>
    )
  }
}

export default NoteModal;
