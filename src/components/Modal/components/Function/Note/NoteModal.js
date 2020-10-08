import React from 'react';
import './NoteModal.scss';
import './components/NoteInput';
import NoteSaveBar from './components/NoteSaveBar';
import NoteInput from './components/NoteInput/NoteInput';
// import axios from 'axios';
import { AddNote } from '../../../../Api/Note/Note';


class NoteModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "Chloe Test",
      content: '',
      relatedTo: '5f7c1fa07ed22f05ec4ec31a',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleNoteCreate = this.handleNoteCreate.bind(this);
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value } );
  }

  handleNoteCreate = () => {
    const note = { ...this.state };
    this.setState(() => {
      AddNote(note)
        .then(newNote => {
            this.props.history.push(`http://localhost:3000/api/notes/${newNote.Id}`);
        })
        .catch(error => this.setState({ error }));
    });
}



  render() {
    return (
      <section id="NoteModal" className="NoteModal">
        <div className="note-input">
          <NoteInput 
            placeholder="Start typing to leave a note..."
            content={this.state.content}
            onChange={this.handleChange}
            
          />
        </div>
        <div className="note-container-footer">
          <NoteSaveBar onSubmit={this.handleNoteCreate} />
        </div>
      </section>
    )
  }
}

export default NoteModal;
