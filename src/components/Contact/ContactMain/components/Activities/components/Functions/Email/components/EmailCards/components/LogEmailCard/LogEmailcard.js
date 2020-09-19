import React from 'react';
import UserTag from '../../../../../../../../../../../Style/Tag/Activity/User';
import UserIcon from '../../../../../../../../../../../../img/Contact/profile.png';
import './LogEmailCard.scss';


class LogEmailCard extends React.Component {
    constructor(props) {
        super(props);
        this.Name = "Yurun Yu";
        this.state = {
            userName: this.Name,
        }
    }

    render() {
        const { userName } = this.state;
        return (
            <div className="logEmailCard">
                <div className='logEmailCard__content'>
                    {this.props.date}
                    <div>test logEmail Card</div>
                    <div>test logEmail Card</div>
                    <div>test logEmail Card</div>
                    <div>test logEmail Card</div>
                </div>
                <div className='logEmailCard__footer'>
                    <UserTag
                        userName={userName}
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