import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import shuffleCards from '../../../../services/shuffleCards';
import "./EmailPage.scss";


class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.emailCardsList = [
            { key: 1, name: "Yurun Yu", value: "test", type: "Logged email", date: '2020-09-14',time:'9:00 PM'},
            { key: 2, name: "Yurun Yu", value: "test", type: "Logged email", date: '2020-10-13',time:'9:30 AM' },
            { key: 3, name: "Yurun Yu", value: "test", type: "Logged email", date: '2020-08-12',time:'10:59 AM'},
            { key: 4, name: "Yurun Yu", value: "test", type: "Logged email", date: '2020-09-15',time:'12:16 PM' },
            { key: 5, name: "Yurun Yu", value: "test", type: "Logged email", date: '2020-08-14',time:'12:00 AM'},
            { key: 6, name: "Yurun Yu", value: "test", type: "Email", date: '2020-10-14',time:'13:48 AM'},
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