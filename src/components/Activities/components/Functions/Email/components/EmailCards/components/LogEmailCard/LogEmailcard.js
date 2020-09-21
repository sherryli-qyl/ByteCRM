import React from 'react';
import UserTag from '../../../../../../../../Style/Tag/User';
import UserIcon from '../../../../../../../../../img/Contact/profile.png';
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
                <div className='logEmailCard__content'>
                    {this.props.card.date}
                    <div>test logEmail Card</div>
                    {this.props.card.time}
                    <div>test logEmail Card</div>
                    <div>test logEmail Card</div>
                </div>
                <div className='logEmailCard__footer'>
                    <UserTag
                        userName={this.props.card.name}
                        userIcon={UserIcon}
                    />
                    <div className='logEmailCard__footer__label'>
                        logged an Email
                    </div>
                </div>

            </div>
        )
    }
}

export default LogEmailCard;