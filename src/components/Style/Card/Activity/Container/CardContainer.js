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
                        key={card.key}
                        dateTime={`${transferDateInMonDayYear(card.date)} at ${card.time}`}
                        card = {card}
                        icon={icon}
                        cardContent={logCard(card)}
                    />
                    :
                    <ActivityCard
                        key={card.key}
                        dateTime={`${transferDateInMonDayYear(card.date)} at ${card.time}`}
                        card = {card}
                        icon={icon}
                        cardContent={createCard(card)}
                    />
            ))
            }
        </div>
    );
}

export default CardContainer;