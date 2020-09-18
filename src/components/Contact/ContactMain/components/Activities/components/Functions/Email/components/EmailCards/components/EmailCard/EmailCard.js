import React from 'react';
import './EmailCard.scss';



class EmailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div className="emailCard">
                test Email Card
                {this.props.date}
            </div>
        )
    }
}

export default EmailCard;