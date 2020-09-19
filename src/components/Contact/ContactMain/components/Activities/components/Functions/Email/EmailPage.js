import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import shuffleCards from '../../../../../../../services/shuffleCards';
import "./EmailPage.scss";


class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.emailCardsList = [
            { key: 1, name: "yurun yu", value: "test", type: "Logged Call", date: '2020-09-14',time:'9:00 PM'},
            { key: 2, name: "yurun yu", value: "test", type: "Email", date: '2020-10-13',time:'9:30 PM' },
            { key: 3, name: "yurun yu", value: "test", type: "Logged Call", date: '2020-08-12',time:'10:00 AM' },
            { key: 4, name: "yurun yu", value: "test", type: "Email", date: '2020-09-15',time:'7:16 PM' },
            { key: 5, name: "yurun yu", value: "test", type: "Logged Call", date: '2020-08-14',time:'12:00 AM' },
        ]
        this.state = {
            cardsArray: [],
        }
    }

    sortCardsArray() {
        const newCardsArray = shuffleCards(this.emailCardsList);
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
            <div className="emailPage">
                <EmailPageHeader />
                <EmailCards cardsArray={cardsArray} />
            </div>
        )
    }
}

export default EmailPage;