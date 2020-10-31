import React from 'react';
import {transferDateInMonDayYear} from '../../../../../../lib/date';
import StageBar from './component/StageBar';
import './Detail.scss';




const Detail = ({
    children,
    card,
}) => {

    return (
        <div className="dealsDetail">
            <div className='dealsDetail__wrapper'>
                <div className='dealsCard__name'>
                    {card.name}
                </div>
                <div className='dealsCard__stage'>
                    {`Stage: `}
                </div>
                <div className='dealsCard__closeDate'>
                    {`Close Date: ${transferDateInMonDayYear(card.closeDate)}`}
                </div>    
            </div>
        </div>
    )
}

export default Detail;