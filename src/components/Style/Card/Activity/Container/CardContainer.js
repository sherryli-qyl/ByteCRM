import React from 'react';
import ActivityCard from '../Card';
import {transferDate} from '../../../../services/DateManager';




const CardContainer = ({
    date,
    content,
    createCard,
    logCard,
}) => {
    
    const NewDate = transferDate(date);
    // const NewDate = date;
    return (
        <div className='CardContainer'>
            <div className="CardContainer__dateLabel">
                {NewDate}
                
            </div>
            {content.map((card) => (
                card.type === 'Create'?
                    <ActivityCard
                      card = {createCard(card.date,card.date)}
                      />
                    :
                    <ActivityCard
                      card ={logCard(card.date,card.date)}
                  
                    />
            ))
            }
        </div>
    );
}

export default CardContainer;