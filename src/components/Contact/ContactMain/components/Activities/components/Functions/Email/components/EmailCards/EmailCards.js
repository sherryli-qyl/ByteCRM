import React from 'react';
import EmailCard from './components/EmailCard';
import LogEmailCard from './components/LogEmailCard';
import { transferDate } from '../../../../../../../../../services/DateManager';
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
                    <EmailCard
                        key={card.date}
                        date={card.date} />
                    :
                    <LogEmailCard
                        key={card.date}
                        date={card.date} />
            ))
            }
        </div>

    );
}



function EmailCards(props) {
    return (
        <div className='emailCards'>
            {props.cardsArray.map((cards) => (
                <CardContainer
                    key={cards.date}
                    date={cards.date}
                    content={cards.content} />
            ))}
        </div>
    )
}

export default EmailCards;