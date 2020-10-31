import React from 'react';
import './NoteModal.scss';
import './components/NoteInput';
import NoteSaveBar from './components/NoteSaveBar';
import NoteInput from './components/NoteInput/NoteInput';
import store from '../../../../../../store';
import { saveAction } from '../../../../../../action';
import { AddNote } from '../../../../../Api/Note/Note';

class NoteModal extends React.Component {
  constructor(props) {
    super(props);

    const user = JSON.parse(localStorage.getItem('user'));
    const relatedTo = sessionStorage.getItem('id');

    this.state = {
      user,
      content: '',
      relatedTo,
      btnDisable: true,
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleClickSaveBtn = this.handleClickSaveBtn.bind(this);
  }

  handleEditorChange(content) {
    if (this.checkValidation(content)) {
      this.setState({
        content,
        btnDisable: false,
      });
    } else {
      this.setState({
        content,
        btnDisable: true,
      });
    }
  }

  checkValidation(text) {
    const checkInput = text.replaceAll(' ', '').replaceAll('<br>', '').replaceAll('<p></p>', '');
    if (checkInput !== '') {
      return true;
    }
    return false;
  }

  handleClickSaveBtn() {
    const { content, user, relatedTo } = this.state;
    if (this.checkValidation(content)) {
      const body = {
        content,
        createdBy: user.id,
        type: 'Note',
        isDeleted: false,
        relatedTo,
      };
      const res = AddNote(body);
      res.then((value) => {
        if (this.props.modalController) {
          const action = saveAction(value);
          store.dispatch(action);
          this.props.modalController.close();
        } else {
          console.log('Unexpected Error');
        }
      });
    } else {

    }
  }

  render() {
    const { btnDisable, user, relatedTo } = this.state;

    return (
      <section id="NoteModal" className="NoteModal">
        <div className="note-input">
          <NoteInput
            placeholder="Start typing to leave a note..."
            handleEditorChange={this.handleEditorChange}
            createdBy={user}
            relatedTo={relatedTo}
          />
        </div>
        <div className="note-container-footer">
          <NoteSaveBar
            onClick={this.handleClickSaveBtn}
            btnDisable={btnDisable}
          />
        </div>
      </section>
    );
  }
}

export default NoteModal;
