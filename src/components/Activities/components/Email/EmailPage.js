import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';
import shuffleCards from '../../../services/shuffleCards';
import { EditorContext } from '../../../Style/EditableText/Context';
import {GetEmails} from '../../../Api/Email/Email';
import Loading from '../../../Loading';
import "./EmailPage.scss";


class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
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
        const emails = GetEmails(this.props.id);
        emails.then(value =>{
            this.setState({
                cardList: value.emailLogs,
            });
            return this.state.cardList
        }).then(data =>{
            if(data.length >= 1){
                console.log('check');
                this.sortCardsArray();
            }   
        }); 
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