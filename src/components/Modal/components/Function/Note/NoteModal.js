import React from 'react';
import './NoteModal.scss';
import './components/NoteInput';
import NoteSaveBar from './components/NoteSaveBar';
import NoteInput from './components/NoteInput/NoteInput';


const NoteModal = () => (
  <section id="NoteModal" className="NoteModal">
    <div className="note-input">
      <NoteInput 
        placeholder="Start typing to leave a note..."
      />
    </div>
    <div className="note-container-footer">
      <NoteSaveBar />
    </div>
  </section>
);

export default NoteModal;
