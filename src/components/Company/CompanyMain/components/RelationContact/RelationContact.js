import React from 'react';
// import Relationship from './components/Relationship';
import RelationCard from './components/RelationCard';
import ExpandBar from '../../../../ExpandBar';
import './RelationContact.scss';

const RelationContact = (props) => {

  return (
    <div className="relationship_page">
      <ExpandBar content={<RelationCard />}
        label={"Contact"} />
    </div>
  )
}

export default RelationContact;