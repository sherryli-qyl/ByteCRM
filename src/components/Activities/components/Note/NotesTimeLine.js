import React from 'react';
import TimeLineControls from './components/TimeLineControls';
import NoteCardsList from './components/NoteCardsList';
import shuffleCards from '../../../services/shuffleCards';
import "./NotesTimeLine.scss";
import { GetNoteByRelatedToId, UpdateNote, DeleteNote } from '../../../Api/Note/Note';





class NotesTimeLine extends React.Component {
  constructor(props) {
    super(props);
    const {contact} = this.props;
    this.state = {
      cardsList: [],
      cardsArray: [],
      contact,
    }

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.sortCardsArray = this.sortCardsArray.bind(this);
    this.handleDeleteNoteCard = this.handleDeleteNoteCard.bind(this);
    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  componentDidMount() {
    this.handleGetNotes();
  }

  handleGetNotes() {
    const notes = GetNoteByRelatedToId(this.props.contact.id);
    notes
      .then(value => {
        this.setState({
          cardsList: value,
        });
        return this.state.cardsList
      })
      .then(data => {
        this.sortCardsArray();
      });
  }

  sortCardsArray() {
    const newCardsArray = shuffleCards(this.state.cardsList);
    this.setState({
      cardsArray: newCardsArray
    })
  }

  onChangeText(newContent, cardKey) {
    const newCardsList = this.state.cardsList;
    for (let i in newCardsList) {
      if (newCardsList[i].key === cardKey) {
        newCardsList[i].content = newContent;
        this.setState({
          cardsList: newCardsList,
        })
      }
    }
  }

  onChangeNote(noteId, body) {
    UpdateNote(noteId, body);
  }

  handleCreateNote(note){
    const newCardList = this.state.cardsList;
    newCardList.push(note);
    this.setState({
      cardsList: newCardList,
    })
    this.sortCardsArray()
}

  handleDeleteNoteCard(noteId){
    const response = DeleteNote(noteId);
    response.then(value => {
      if (value) {
        this.handleGetNotes();
      }
    })
}


  render() {
    const { cardsArray,contact} = this.state;

    return (
  
          <div className="note-time-line">
            <TimeLineControls 
              contact={contact}
              handleCreateNote = {this.handleCreateNote}
            />
            <NoteCardsList 
              contact={contact}
              cardsArray={cardsArray} 
              onChangeNote = {this.onChangeNote}
              handleDeleteNoteCard = {this.handleDeleteNoteCard}
            />
          </div>
        )}
}

export default NotesTimeLine;