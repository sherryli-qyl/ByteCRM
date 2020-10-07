import { keys } from '@material-ui/core/styles/createBreakpoints';
import React from 'react';
import Body from '../../../private/LogEmailMain';
import Footer from './components/Footer';
import Header from './components/Header';

import './LogEmailCard.scss';


class LogEmailCard extends React.Component {
    constructor(props) {
        super(props);
        const { _id, description } = this.props.card;
        this.state = {
            currentDate: this.props.card.date,
            currentTime: this.props.card.time,
            card:this.props.card,
            cardId: _id,
            description,

        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    onDateChange(date) {
        let newCard = this.state.card;
        newCard.date = date;
        this.setState({
            currentDate: date,
            card: newCard,
        })
        this.props.onChangeEmail(this.state.cardId,newCard)
    }

    onTimeChange(time) {
        let newCard = this.state.card;
        newCard.time = time;
        this.setState({
            currentTime: time,
            card:newCard,
        })
        this.props.onChangeEmail(this.state.cardId,newCard)
    }

    onDescriptionChange(description){
        let newCard = this.state.card;
        newCard.description = description;
        this.setState({
            description:description,
            card:newCard,
        })
        this.props.onChangeEmail(this.state.cardId,newCard)
    }

    render() {
        const { currentDate, currentTime, cardId, description } = this.state;
        return (
            <div className="logEmailCard">
                {description?
                    <Header 
                        cardId={cardId}
                        description={description}
                        onContentChange = {this.onDescriptionChange}/>
                    :
                    ""
                }
                <div className='blockline' >
                    <Body currentDate={currentDate}
                          currentTime={currentTime}
                          onTimeChange={this.onTimeChange}
                          onDateChange={this.onDateChange} />
                </div>
                <Footer userName={this.props.card.name} />
            </div>
        )
    }
}

export default LogEmailCard;