import React from 'react';
import "./EmailCards.scss";





const EmailCards = (props) => {

    if (props.type === "logEmail") {
        return (
            <div className="logEmailCard">
                
            test logEmail Card
            </div>
        )
    }
    else {
        return (
            <div className="emailCard">
               
            test Email Card
            </div>
        )
    }

}






export default EmailCards;