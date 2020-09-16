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
    <NoteSaveBar className="note-container-footer" />
  </section>
);

export default NoteModal;
