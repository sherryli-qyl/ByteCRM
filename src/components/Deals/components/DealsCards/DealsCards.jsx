import React from 'react';
import Detail from './component/Detail';

import './DealsCards.scss';

const DealsCards = ({
  deals,
  handleRemoveDeals
}) => (
  <div className="dealsCard">
    { deals.map((item) => (
      <Detail
        key={item.id}
        card={item}
        handleRemoveDeals = {handleRemoveDeals}
      />
    ))}

  </div>
);

export default DealsCards;
