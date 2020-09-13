import React from 'react';
import './NoteModal.scss';
import './components/RichTextInput';
import RichTextInput from './components/RichTextInput';
import NoteSaveBar from './components/NoteSaveBar';


const NoteModal = () => (
  <section id="NoteModal" className="NoteModal">
    <div className="note-input">
      <RichTextInput 
        className="note-input"
        placeholder="Please start typing note..."
      />
    </div>
    <div className="note-container-footer">
      <NoteSaveBar />
    </div>
  </section>
  );


export default NoteModal;