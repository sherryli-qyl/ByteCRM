import React from 'react';
import CreateEmailCard from './components/CreateEmailCard';
import LogEmailCard from './components/LogEmailCard';
import CardContainer from '../../../../../../../../../Style/Card/Activity/Container';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./EmailCards.scss";


function EmailCards(props) {
    const createCard = (key,date)=>(<CreateEmailCard key={key} date={date}/>);
    const logCard =(key,date)=>(<LogEmailCard key={key} date={date}/>);
    const icon= faEnvelope;
    return (
        <div className='emailCards'>
            {props.cardsArray.map((cards) => (
                <CardContainer
                    key={cards.date}
                    date={cards.date}
                    content={cards.content}
                    icon = {icon}  
                    createCard = {createCard}
                    logCard = {logCard}
                    />
            ))}
        </div>
    )
}

export default EmailCards;