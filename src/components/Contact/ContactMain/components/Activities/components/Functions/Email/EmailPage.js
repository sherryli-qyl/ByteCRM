import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import getDate from '../../../../../../../services/GetDate';
import Cards from '../../../../../../../../js/Cards';
import sortDate from '../../../../../../../services/SortDate';
import "./EmailPage.scss";





class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.emailCardsList = [
            { key: 1, name: "yurun yu", value: "test", type: "logEmail", date: '2020-09-14' },
            { key: 2, name: "yurun yu", value: "test", type: "Email", date: '2020-10-13' },
            { key: 3, name: "yurun yu", value: "test", type: "logEmail", date: '2020-08-12' },
            { key: 4, name: "yurun yu", value: "test", type: "Email", date: '2020-09-15' },
            { key: 5, name: "yurun yu", value: "test", type: "logEmail", date: '2020-08-14' },
        ]
        this.state = {
            cardsArray: [],
        }
    }

    getCardsArray() {
        const newCardsArray = this.state.cardsArray;
        const dataList = this.emailCardsList;
        sortDate(dataList);
        for (let i in dataList) {
            const newDate = getDate(dataList[i].date);
            const sameCards = [];
            if (!this.checkduplicate(newDate, dataList[i])) {
                sameCards.push(dataList[i]);
                const cards = new Cards(newDate, sameCards);
                newCardsArray.push(cards);
                this.setState({
                    cardsArray: newCardsArray,
                })
            }
        }
        console.table(this.state.cardsArray);
    }

    checkduplicate(date, card) {
        const newCardsArray = this.state.cardsArray
        for (let i in newCardsArray) {
            if (date === newCardsArray[i].date) {
                newCardsArray[i].content.push(card);
                this.setState({
                    cardsArray: newCardsArray,
                })
                return true;
            }
        }
    }

    sortCardsArray() {
        const newCardsArray = this.state.cardsArray;
        sortDate(newCardsArray);
        this.setState({
            cardsArray: newCardsArray
        })
    }

    componentDidMount() {
        this.getCardsArray();
        this.sortCardsArray();
    }

    render() {
        const { cardsArray, emailCardsList } = this.state;
        return (
            <div className="emailPage">
                <EmailPageHeader />
                <EmailCards cardsArray={cardsArray} />
            </div>
        )
    }
}

export default EmailPage;