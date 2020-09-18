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
                test logEmail Card
                {this.props.date}
            </div>
        )
    }
}

export default LogEmailCard;