import React from 'react';
import './LogEmailCard.scss';


class LogEmailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="logEmailCard">
                {this.props.date}
                <div>test logEmail Card</div>
                <div>test logEmail Card</div>
                <div>test logEmail Card</div>
                <div>test logEmail Card</div>
            </div>
        )
    }
}

export default LogEmailCard;