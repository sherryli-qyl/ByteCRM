import React from 'react';
import MeetingCards from './components/MeetingCards/MeetingCards';
import MeetingPageHeader from './components/Header/MeetingPageHeader';
import shuffleCards from '../../../../services/shuffleCards';
import "./MeetingPage.scss";


class MeetingPage extends React.Component {
    constructor(props) {
        super(props);
        this.meetingCardsList = [
            { key: 1, name: "Sherry Li", value: "test", type: "Logged meeting", date: '2020-09-14',time:'9:00 PM'},
            { key: 2, name: "Sherry Li", value: "test", type: "Meeting", date: '2020-10-13',time:'9:30 PM' },
            { key: 3, name: "Sherry Li", value: "test", type: "Logged meeting", date: '2020-08-12',time:'10:00 AM'},
            { key: 4, name: "Sherry Li", value: "test", type: "Meeting", date: '2020-09-15',time:'7:16 PM' },
            { key: 5, name: "Sherry Li", value: "test", type: "Logged meeting", date: '2020-08-14',time:'12:00 AM'},
            { key: 6, name: "Sherry Li", value: "test", type: "Logged meeting", date: '2020-10-14',time:'13:48 AM'},
        ]
        this.state = {
            cardsArray: [],
        }
    }

    sortCardsArray() {
        const newCardsArray = shuffleCards(this.meetingCardsList);
        this.setState({
            cardsArray: newCardsArray
        })
    }

    componentDidMount() {
        this.sortCardsArray();
    }

    render() {
        const { cardsArray} = this.state;
        return (
            <div className="meetingPage">
                <MeetingPageHeader />
                <MeetingCards cardsArray={cardsArray} />
            </div>
        )
    }
}

export default MeetingPage;