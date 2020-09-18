import React from 'react';
import EmailCards from './components/EmailCards';
import EmailPageHeader from './components/Header';

import "./EmailPage.scss";





class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        const logEmailCards = [
            { key: 1, name: "yurun yu", value: "test", type: "logEmail" },
            { key: 2, name: "yurun yu", value: "test", type: "Email" },
            { key: 3, name: "yurun yu", value: "test", type: "logEmail" },
            { key: 4, name: "yurun yu", value: "test", type: "Email" },
            { key: 5, name: "yurun yu", value: "test", type: "logEmail" },
        ]
        this.state = {
            logEmailCards,
        }
    }

    handleCreateBtn(){

    }

    render() {
        const { logEmailCards } = this.state;
        return (
            <div className="emailPage">
                <EmailPageHeader/>
                {logEmailCards.map((item) => (
                    <EmailCards 
                        key={item.key}
                        value={item.value}
                        type={item.type}

                    />
                ))}
            </div>
        )
    }
}

export default EmailPage;