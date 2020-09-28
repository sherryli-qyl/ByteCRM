import React from 'react';
import TimeLineControls from './components/TimeLineControls';
import CallCardsList from './components/CallCardsList';
import shuffleCards from '../../../../services/shuffleCards';
import './CallTimeLine.scss';

class NotesTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.noteCardsList = [
      {
        key: 1,
        author: 'Derrick Song',
        value: 'This is a comment',
        type: 'Log call',
        date: '2020-09-20',
        time: '2:00 PM',
        content: 'Log call test',
        comments: [
          {
            id: 123,
            author: 'Derrick',
            content: 'This is a comment',
            timestamp: 'Sep 20, 2020 at 2:00 PM GMT+10',
          },
          {
            id: 124,
            author: 'Mike',
            content: 'This is a comment....',
            timestamp: 'Sep 01, 2020 at 10:00 AM GMT+10',
          },
        ],
      },
      {
        key: 2,
        author: 'Liu Guoqiang',
        value: 'Log call test',
        type: 'Log call',
        date: '2020-09-01',
        time: '1:00 PM',
        content: 'This is a comment',
        comments: [
          {
            id: 123,
            author: 'Allen',
            content: 'This is a comment',
            timestamp: 'Sep 01, 2020 at 1:00 PM GMT+10',
          },
          {
            id: 124,
            author: 'Jayce',
            content: 'Here is a comment...',
            timestamp: 'Sep 05, 2020 at 10:01 AM GMT+10',
          },
        ],
      },
    ];
    this.state = {
      cardsArray: [],
    };
  }

  sortCardsArray() {
    const newCardsArray = shuffleCards(this.noteCardsList);
    this.setState({
      cardsArray: newCardsArray,
    });
  }

  componentDidMount() {
    this.sortCardsArray();
  }

  render() {
    const { cardsArray } = this.state;
    return (
      <div className="note-time-line">
        <TimeLineControls />
        <CallCardsList cardsArray={cardsArray} />
      </div>
    );
  }
}

export default NotesTimeLine;
