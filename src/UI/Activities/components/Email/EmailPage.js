import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import shuffleCards from '../../../services/shuffleCards';
import { EditorContext } from '../../../Style/EditableText/Context';
import "./EmailPage.scss";


class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.emailCardsList = [
            { key: 1, name: "Yurun Yu", value: "test", type: "Logged email", description: "test test test", date: '2020-10-14', time: '9:00 PM' },
            { key: 2, name: "Yurun Yu", value: "test", type: "Logged email", description: "", date: '2020-10-13', time: '9:30 AM' },
            { key: 3, name: "Yurun Yu", value: "test", type: "Logged email", description: "test test test", date: '2020-08-12', time: '10:59 AM' },
            { key: 4, name: "Yurun Yu", value: "test", type: "Logged email", description: "", date: '2020-09-15', time: '12:16 PM' },
            { key: 5, name: "Yurun Yu", value: "test", type: "Logged email", description: "test test test", date: '2020-08-14', time: '12:00 AM' },
        ]
        this.state = {
            cardList: this.emailCardsList,
            cardsArray: [],
        }
        this.onChangeText = this.onChangeText.bind(this);
    }

    sortCardsArray() {
        const newCardsArray = shuffleCards(this.state.cardList);
        this.setState({
            cardsArray: newCardsArray
        })
    }

    onChangeText(newContent, cardKey) {
        const newCardsList = this.state.cardList;
        for (let i in newCardsList) {
            if (newCardsList[i].key === cardKey) {
                newCardsList[i].description = newContent;
                this.setState({
                    cardsList: newCardsList,
                })
            }
        }
        console.table(this.state.cardsList);
    }

    componentDidMount() {
        this.sortCardsArray();
    }

    render() {
        const { cardsArray } = this.state;
        const onSave = this.onChangeText;
        return (
            <div className="emailPage">
                <EmailPageHeader />
                <EditorContext.Provider value={onSave}>
                    <EmailCards cardsArray={cardsArray} />
                </EditorContext.Provider>
            </div>
        )
    }
}

export default EmailPage;