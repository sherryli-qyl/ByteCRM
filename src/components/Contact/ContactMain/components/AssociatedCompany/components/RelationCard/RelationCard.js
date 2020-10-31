import React from 'react';
import Detail from './components/Detail';
import './RelationCard.scss';

const RelationCard = ({
  company,
  contact,
  handleRemoveCompany,
}) => (
  <div className="relationcard">
    {company
      ? (
        <Detail
          company={company}
          contact={contact}
          website={company.companyDomain}
          phoneNumber={company.phoneNumber}
          handleRemoveCompany={handleRemoveCompany}
        />
      )
      : (
        <div className="relationcard__description">
          View the company related to this contact. Add an existing company or create a new one.
        </div>
      )}

  </div>
);

export default RelationCard;
