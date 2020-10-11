import React from 'react';
import Detail from './components/Detail';
import './RelationCard.scss'

const contactInfo = [
  { key: "HubSpot, Inc", website: "hubspot.com", phone: "+1 (888) 482-7768" },
]

const RelationCard = () => (
  <div className="cardWrap">
    {contactInfo.map((item) => (
      <Detail
        key={item.key}
        company={item.key}
        website={item.website}
        phone={item.phone} />

    )
    )}
  </div>
)



export default RelationCard;