import React from 'react';
import Detail from './components/Detail';
import './RelationCard.scss'

const contactInfo = [
  { key: "Brian Halligan", position: "CEO at HubSpot,Inc.", email: "bh@hubspot.com" },
  { key: "Cool Robot", position: "Robot at HubSpot,Inc.", email: "coolrobot@hubspot.com" },
]

const RelationCard = () => (
  <div className="cardWrap">
    {contactInfo.map((item) => (
      <Detail
        key={item.key}
        name={item.key}
        position={item.position}
        email={item.email} />
        
    )
    )}
  </div>
)



export default RelationCard;