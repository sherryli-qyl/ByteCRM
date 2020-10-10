import React from 'react';
import TimeLineControls from './components/TimeLineControls';
import NoteCardsList from './components/NoteCardsList';
import shuffleCards from '../../../services/shuffleCards';
import "./NotesTimeLine.scss";
import { GetNoteByRelatedToId, UpdateNote } from '../../../Api/Note/Note';


class NotesTimeLine extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cardsList: [],
      cardsArray: [],
    }

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.sortCardsArray = this.sortCardsArray.bind(this);
  }

  componentDidMount() {
    const notes = GetNoteByRelatedToId(this.props.contactId);
    notes
      .then(value => {
        this.setState({
          cardsList: value,
        });
        return this.state.cardsList
      })
      .then(data => {
        if (data.length >= 1) {
          this.sortCardsArray();
        }
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


  render() {
    const { cardsArray } = this.state;

    return (
      <div className="note-time-line">
        <TimeLineControls />
        <NoteCardsList 
          cardsArray={cardsArray} 
          onChangeNote = {this.onChangeNote}
        />
      </div>
    )
  }
}

export default NotesTimeLine;