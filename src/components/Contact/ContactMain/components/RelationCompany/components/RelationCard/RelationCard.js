import React from 'react';
import Detail from './components/Detail';
import './RelationCard.scss'



const RelationCard = ({
  company,
}) => {
  return (
    <div className="cardWrap">
      {company ?
        <Detail
          name={company.name}
          website={company.companyDomainName}
          phoneNumber={company.phoneNumber} />
        :
        <div>
          View the company related to this contact. Add an existing company or create a new one.
       </div>
      }

    </div>
  )
}



export default RelationCard;