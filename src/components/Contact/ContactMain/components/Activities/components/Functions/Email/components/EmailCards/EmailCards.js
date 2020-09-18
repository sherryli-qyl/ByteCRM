import React from 'react';
import EmailCard from './components/EmailCard';
import LogEmailCard from './components/LogEmailCard';
import {transferDate,sortDate } from '../../../../../../../../../services/DateManager';

import "./EmailCards.scss";





function CardContainer(props) {
    const NewDate = transferDate(props.date);
    return (
        <div className='emailCards__container'>
            <div className="dateLabel">
                {NewDate}
            </div>
            {props.content.map((card) => (
                card.type === 'Email' ?
                    <EmailCard date={card.date} />
                    :
                    <LogEmailCard date={card.date} />
            ))
            }
        </div>

    );
}



function EmailCards(props) {
    return (
        <div className='emailCards'>
            {props.cardsArray.map((cards) => (
                <CardContainer date={cards.date}
                    content={cards.content} />
            ))}
        </div>
    )
}

export default EmailCards;