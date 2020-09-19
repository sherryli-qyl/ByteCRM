import React from 'react';
import './CreateEmailCard.scss';



class CreateEmailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
                <div className="createEmailCard">
                      {this.props.date}
                        <div>test Email Card</div>
                        <div>test Email Card</div>
                        <div>test Email Card</div>
                        <div>test Email Card</div>
                        <div>test Email Card</div>
                        <div>test Email Card</div>               
                </div>
        )
    }
}

export default CreateEmailCard;