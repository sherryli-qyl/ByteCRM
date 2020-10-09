import React from 'react';
import TimeLineControls from './components/TimeLineControls';
import NoteCardsList from './components/NoteCardsList';
import shuffleCards from '../../../../services/shuffleCards';
import "./NotesTimeLine.scss";
import { GetNoteByRelatedToId, UpdateNote } from '../../../../Api/Note/Note';
//import axios from 'axios';


class NotesTimeLine extends React.Component {
  constructor(props) {
    super(props);
    // this.testCardsList = [
    //   {
    //     key: 1,
    //     author: "Joe Doe",
    //     type: "Note",
    //     date: '2020-09-14',
    //     time: '9:00 PM',
    //     content: "note content test note content",
    //     comments: [
    //       { id: 123, author: "Joe", content: "comment test 1", timestamp: "Sep 14, 2020 at 12:08 AM GMT+10" },
    //       { id: 124, author: "Chloe", content: "comment test 2", timestamp: "Sep 14, 2020 at 12:08 AM GMT+10" }
    //     ],
    //   },
    // ]
    this.id = "5f7c1fa07ed22f05ec4ec31a";
    this.state = {
      cardsList: [],
      cardsArray: [],
      isLoading: true,
    }

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.getNotesList = this.getNotesList.bind(this);
    this.sortCardsArray = this.sortCardsArray.bind(this);
  }

  componentDidMount() {
    this.getNotesList();
  }

  getNotesList() {
    const cardsList = GetNoteByRelatedToId(this.id);
    
    cardsList
      .then(result => { 
        this.setState({
          cardsList: result,
          isLoading: false,
        }, () => this.sortCardsArray());
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }


  sortCardsArray() {
    const newCardsArray = shuffleCards(this.state.cardsList);
    console.log(newCardsArray);
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
        <NoteCardsList cardsArray={cardsArray} 
            onChangeNote = {this.onChangeNote}
          />
      </div>
    )
  }
}

export default NotesTimeLine;