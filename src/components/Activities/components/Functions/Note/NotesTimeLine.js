import React from 'react';
import TimeLineControls from './components/TimeLineControls';
import NoteCardsList from './components/NoteCardsList';
import shuffleCards from '../../../../services/shuffleCards';
import { EditorContext } from '../../../../Style/EditableText/Context';
import "./NotesTimeLine.scss";

class NotesTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.testCardsList = [
      {
        key: 1,
        author: "Joe Doe",
        value: "test",
        type: "Note",
        date: '2020-09-14',
        time: '9:00 PM',
        content: "note content test note content",
        comments: [
          { id: 123, author: "Joe", content: "comment test 1", timestamp: "Sep 14, 2020 at 12:08 AM GMT+10" },
          { id: 124, author: "Chloe", content: "comment test 2", timestamp: "Sep 14, 2020 at 12:08 AM GMT+10" }
        ],
      },
      {
        key: 2,
        author: "Joe Doe",
        value: "test",
        type: "Note",
        date: '2020-09-14',
        time: '9:00 PM',
        content: "note content test",
        comments: [
          { id: 123, author: "Joe", content: "comment test 1", timestamp: "Sep 14, 2020 at 12:08 AM GMT+10" },
          { id: 124, author: "Chloe", content: "comment test 2", timestamp: "Sep 14, 2020 at 12:08 AM GMT+10" }
        ],
      },
    ]
    this.state = {
      cardsList: this.testCardsList,
      cardsArray: [],
    }

    this.onChangeText = this.onChangeText.bind(this);
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

  componentDidMount() {
    this.sortCardsArray();
  }

  render() {
    const { cardsArray } = this.state;
    const onSave = this.onChangeText;
    return (
      <div className="note-time-line">
        <TimeLineControls />
        <EditorContext.Provider value={onSave}>
          <NoteCardsList cardsArray={cardsArray} />
        </EditorContext.Provider>
      </div>
    )
  }
}

export default NotesTimeLine;