import React from 'react';
import Detail from './components/Detail';
import './RelationCard.scss'



const RelationCard = ({
  contacts,
  company
}) => (
  <div className="cardWrap">
    {contacts.map((item) => (
      <Detail
        key={item.id}
        company = {company}
        contact = {item}/>
    )
    )}
  </div>
)



export default RelationCard;