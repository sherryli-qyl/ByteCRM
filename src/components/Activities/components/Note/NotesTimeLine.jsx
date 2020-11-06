import React from 'react';
import TimeLineControls from './components/TimeLineControls';
import NoteCardsList from './components/NoteCardsList';
import shuffleCards from '../../../services/shuffleCards';
import store from '../../../../store';
import './NotesTimeLine.scss';
import { GetAllAssociatedNotes, UpdateNote, DeleteNote } from '../../../Api/Note/Note';

// const user = JSON.parse(localStorage.getItem('user'));

class NotesTimeLine extends React.Component {
  constructor(props) {
    super(props);
    const { relatedTo, associatedContacts } = this.props;
    this.state = {
      // user,
      cardsList: [],
      cardsArray: [],
      relatedTo,
      associatedContacts,
      reload: true,
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.sortCardsArray = this.sortCardsArray.bind(this);
    this.handleDeleteNoteCard = this.handleDeleteNoteCard.bind(this);
    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      const { reload, key } = store.getState().reload;
      if (reload && key === 'note') {
        this.handleGetNotes();
      }
    });
    const { reload } = this.state;
    if (reload) {
      this.handleGetNotes();
    }
  }

  onChangeText(newContent, cardKey) {
    const newCardsList = this.state.cardsList;
    for (const i in newCardsList) {
      if (newCardsList[i].key === cardKey) {
        newCardsList[i].content = newContent;
        this.setState({
          cardsList: newCardsList,
        });
      }
    }
  }

  onChangeNote(noteId, body) {
    UpdateNote(noteId, body);
  }

  sortCardsArray() {
    const { cardsList } = this.state;
    const newCardsArray = shuffleCards(cardsList);
    this.setState({
      cardsArray: newCardsArray,
    });
  }

  handleGetNotes() {
    const { relatedTo, associatedContacts } = this.state;
    let allNotes = [];

    if (associatedContacts) {
      let ids = `${relatedTo}&&`;
      for (let i = 0; i < associatedContacts.length; i++) {
        const { id } = associatedContacts[i];
        i === 0 ? ids += id : ids += `&&${id}`;
      }
      allNotes = GetAllAssociatedNotes(ids);
    } else {
      allNotes = GetAllAssociatedNotes(relatedTo);
    }

    allNotes
      .then((value) => {
        this.setState({
          cardsList: value.data,
          reload: false,
        });
        return this.state.cardsList;
      })
      .then((cards) => {
        this.sortCardsArray(cards);
      });
  }

  handleCreateNote(note) {
    const { cardsList } = this.state;
    const newCardList = cardsList;
    newCardList.push(note);
    this.setState({
      cardsList: newCardList,
    });
    this.sortCardsArray();
  }

  handleDeleteNoteCard(noteId) {
    const response = DeleteNote(noteId);
    response.then((value) => {
      if (value) {
        this.handleGetNotes();
      }
    });
  }

  render() {
    const { cardsArray, relatedTo } = this.state;

    return (
      <div className="note-time-line">
        <TimeLineControls
          relatedTo={relatedTo}
          handleCreateNote={this.handleCreateNote}
        />
        <NoteCardsList
          relatedTo={relatedTo}
          cardsArray={cardsArray}
          onChangeNote={this.onChangeNote}
          handleDeleteNoteCard={this.handleDeleteNoteCard}
        />
      </div>
    );
  }
}

export default NotesTimeLine;
