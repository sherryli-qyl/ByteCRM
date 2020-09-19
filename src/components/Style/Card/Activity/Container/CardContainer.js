import React from 'react';
import ActivityCard from '../Card';
import { transferDateInMonthYear, transferDateInMonDayYear} from '../../../../services/DateManager';


const CardContainer = ({
    date,
    content,
    createCard,
    logCard,
    icon,
}) => {
    const NewDate = transferDateInMonthYear(date);
    return (
        <div className='CardContainer'>
            <div className="CardContainer__dateLabel">
                {NewDate}
            </div>
            {content.map((card) => (
                card.type.includes("Logged") ?
                    <ActivityCard
                        key={card.date}
                        dateTime={`${transferDateInMonDayYear(card.date)} at ${card.time}`}
                        date = {card.date}
                        title={card.type}
                        icon={icon}
                        card={logCard(card.date, card.date)}
                    />
                    :
                    <ActivityCard
                        key={card.date}
                        dateTime={`${transferDateInMonDayYear(card.date)} at ${card.time}`}
                        date = {card.date}
                        title={card.type}
                        icon={icon}
                        card={createCard(card.date, card.date)}
                    />
            ))
            }
        </div>
    );
}

export default CardContainer;