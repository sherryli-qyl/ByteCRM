import React from 'react';
import TimeLineControls from './components/TimeLineControls';
import NoteCardsList from './components/NoteCardsList';
import shuffleCards from '../../../../services/shuffleCards';
import "./NotesTimeLine.scss";

class NotesTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.noteCardsList = [
      { key: 1, 
        author: "Joe Doe", 
        value: "test", 
        type: "Note", 
        date: '2020-09-14', 
        time:'9:00 PM',
        content: "note content test", 
        comments: [
          {id:123, author:"Joe", content: "comment test 1", timestamp:"Sep 14, 2020 at 12:08 AM GMT+10"}, 
          {id:124, author:"Chloe", content: "comment test 2", timestamp:"Sep 14, 2020 at 12:08 AM GMT+10"}
        ], 
      },
      { key: 2, 
        author: "Joe Doe", 
        value: "test", 
        type: "Note", 
        date: '2020-09-14', 
        time:'9:00 PM',
        content: "note content test", 
        comments: [
          {id:123, author:"Joe", content: "comment test 1", timestamp:"Sep 14, 2020 at 12:08 AM GMT+10"}, 
          {id:124, author:"Chloe", content: "comment test 2", timestamp:"Sep 14, 2020 at 12:08 AM GMT+10"}
        ], 
      },
    ]
    this.state = {
      cardsArray: [],
    }
  }

  sortCardsArray() {
    const newCardsArray = shuffleCards(this.noteCardsList);
    this.setState({
      cardsArray: newCardsArray
    })
  }

  componentDidMount() {
    this.sortCardsArray();
  }

  render() {
    const {cardsArray} = this.state;
    return (
      <div className="note-time-line">
        <TimeLineControls />
        <NoteCardsList cardsArray={cardsArray} />
      </div>
    )
  }
}

export default NotesTimeLine;