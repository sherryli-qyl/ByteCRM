import React from 'react';
import CreateEmailCard from './components/CreateEmailCard';
import LogEmailCard from './components/LogEmailCard';
import CardContainer from '../../../../../../../../../Style/Card/Activity/Container';
import "./EmailCards.scss";

// function CardContainer(props) {
//     const NewDate = transferDate(props.date);
//     return (
//         <div className='CardContainer'>
//             <div className="CardContainer__dateLabel">
//                 {NewDate}
//             </div>
//             {props.content.map((card) => (
//                 card.type === 'Create' ?
//                     <ActivityCard
//                         card={<EmailCard key={card.date} date={card.date} />}
//                     />
//                     :
//                     <ActivityCard
//                         card={<LogEmailCard key={card.date} date={card.date} />}
//                     />
//             ))
//             }
//         </div>
//     );
// }


function EmailCards(props) {
    const createCard = (key,date)=>(<CreateEmailCard key={key} date={date}/>);
    // const logCard = <CreateEmailCard/>;
    const logCard =(key,date)=>(<LogEmailCard key={key} date={date}/>);
    return (
        <div className='emailCards'>
            {props.cardsArray.map((cards) => (
                <CardContainer
                    key={cards.date}
                    date={cards.date}
                    createCard = {createCard}
                    content={cards.content}  
                    logCard = {logCard}
                    />
            ))}
        </div>
    )
}

export default EmailCards;