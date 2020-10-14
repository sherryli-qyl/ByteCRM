import React from 'react';
import RelationCard from './components/RelationCard';
import ExpandBar from '../../../../ExpandBar';
import './RelationCompany.scss';

const RelationCompany = (props) => {
  let disabled = false;
  if (props.company){
    disabled = true
  }

  return (
    <div className="relationship_page">
      <ExpandBar content ={<RelationCard company={props.company}/>} 
                 label = {"Company"}
                 disabled = {disabled}
                 showAdd = {true}/>
    </div>
  )
}

export default RelationCompany;