import React from 'react';
import { transferDateInYearMonDay } from '../../../../../../services/DateManager';
import Header from '../../private/LogEmailMain';
import Body from './components/LogEmailBody';
import Footer from './components/LogEmailFooter';
import './LogEmail.scss';




class LogEmail extends React.Component {
    constructor(props) {
        const currentDate = transferDateInYearMonDay(new Date());
        const currentTime = "09:00"
        super(props);
        this.state = {
            currentDate,
            currentTime,
            text: '',
        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleEditorChange(text) {
        this.setState({
            text: text
        })
    }

    handleTimeChange(time) {
        const newTime = time;
        this.setState({
            currentTime: newTime,
        })
    }

    handleDateChange(date) {
        const newDate = date;
        this.setState({
            currentDate: newDate,
        })
    }


    render() {
        const { currentDate, currentTime } = this.state;
        return (
            <div className="logEmailModal">
                <div className="logEmailModal__header">
                    <Header currentDate={currentDate}
                            currentTime={currentTime}
                            onDateChange = {this.handleDateChange}
                            onTimeChange = {this.handleTimeChange}
                    />
                </div>
                <div className='blockline--top' >
                    <Body handleEditorChange={this.handleEditorChange} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default LogEmail;