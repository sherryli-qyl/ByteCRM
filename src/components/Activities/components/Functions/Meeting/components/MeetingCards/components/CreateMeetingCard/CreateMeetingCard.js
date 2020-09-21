import React from 'react';
import './CreateMeetingCard.scss';



class CreateMeetingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
                <div className="createMeetingCard">
                      {this.props.date}
                        <div>test Meeting Card</div>
                        <div>test Meeting Card</div>
                        <div>test Meeting Card</div>
                        <div>test Meeting Card</div>
                        <div>test Meeting Card</div>
                        <div>test Meeting Card</div>               
                </div>
        )
    }
}

export default CreateMeetingCard;