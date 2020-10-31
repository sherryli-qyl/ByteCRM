import React from 'react';
import Detail from './component/Detail';

import './DealsCards.scss';


const DealsCards = ({
    children,
    deals
})=>{

    return(
        <div className = 'dealsCard'>
            { deals.map((item)=>(
                <Detail key = {item.id}
                        card = {item}/>
            ))
            }

        </div>
    )
}

export default DealsCards;