import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import {getDate,sortDate} from '../../../../../../../services/DateManager';
import shuffleCards from '../../../../../../../services/shuffleCards';
import Cards from '../../../../../../../../js/Cards';
import "./EmailPage.scss";





class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.emailCardsList = [
            { key: 1, name: "yurun yu", value: "test", type: "Logged Call", date: '2020-09-14' },
            { key: 2, name: "yurun yu", value: "test", type: "Email", date: '2020-10-13' },
            { key: 3, name: "yurun yu", value: "test", type: "Logged Call", date: '2020-08-12' },
            { key: 4, name: "yurun yu", value: "test", type: "Email", date: '2020-09-15' },
            { key: 5, name: "yurun yu", value: "test", type: "Logged Call", date: '2020-08-14' },
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