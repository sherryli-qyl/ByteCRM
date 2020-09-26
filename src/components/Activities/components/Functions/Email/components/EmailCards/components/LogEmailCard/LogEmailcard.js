import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';

import './LogEmailCard.scss';


class LogEmailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: this.props.card.date,
            currentTime: this.props.card.time
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.onTest = this.onTest.bind(this)
    }

    onDateChange(date) {
        this.setState({
            currentDate: date,
        })
        console.log("1111" + date);
    }

    onTest(date) {
        const newDate = date;
        this.setState({
            currentDate: newDate,
        })
        console.log(date)
    }

    onTimeChange(time) {
        const newTime = time;
        this.setState({
            currentTime: newTime,
        })
    }

    render() {
        const { currentDate, currentTime } = this.state;
        return (
            <div className="logEmailCard">
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