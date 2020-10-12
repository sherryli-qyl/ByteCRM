import React from 'react';
import ActivityCard from '../Card';
import { transferDateInMonthYear, transferDateInMonDayYear } from '../../../../services/DateManager';


const CardContainer = ({
    date,
    content,
    createCard,
    logCard,
    icon,
    handleDeleteCard,
    handleTest
}) => {
    const NewDate = transferDateInMonthYear(date);
    return (
        <div className='CardContainer'>
            <div className="CardContainer__dateLabel">
                {NewDate}
            </div>
            {content.map((card) => {
                return (
                    card.type.includes("Logged") ?
                        <ActivityCard
                            key={card._id}
                            dateTime={`${transferDateInMonDayYear(card.date)} at ${card.time}`}
                            card={card}
                            icon={icon}
                            handleTest={handleTest}
                            handleDeleteCard={() => handleDeleteCard(card._id)}
                            cardContent={logCard(card)}
                        />
                        :
                        <ActivityCard
                            key={card._id}
                            dateTime={`${transferDateInMonDayYear(card.date)} at ${card.time}`}
                            card={card}
                            icon={icon}
                            handleDeleteCard={() => handleDeleteCard(card._id)}
                            cardContent={createCard(card)}
                        />
                )
            })
            }
        </div>
    );
}

export default CardContainer;