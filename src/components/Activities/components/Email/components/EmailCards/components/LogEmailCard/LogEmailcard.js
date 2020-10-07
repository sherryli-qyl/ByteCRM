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
            cardId: _id,
            description,

        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            currentDate: date,
        })
    }

    onTimeChange(time) {
        const newTime = time;
        this.setState({
            currentTime: newTime,
        })
    }

    render() {
        const { currentDate, currentTime, cardId, description } = this.state;
        return (
            <div className="logEmailCard">
                {description?
                    <Header 
                        cardId={cardId}
                        description={description} />
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