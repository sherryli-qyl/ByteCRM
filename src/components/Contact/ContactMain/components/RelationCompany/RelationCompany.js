import React from 'react';
import RelationCard from './components/RelationCard';
import ExpandBar from '../../../../ExpandBar';
import './RelationCompany.scss';

const RelationCompany = (props) => {

  return (
    <div className="relationship_page">
      <ExpandBar content ={<RelationCard/>} 
                 label = {"Company"}/>
    </div>
  )
}

export default RelationCompany;