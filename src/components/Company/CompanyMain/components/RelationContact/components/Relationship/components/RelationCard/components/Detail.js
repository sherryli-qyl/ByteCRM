import React from 'react';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Detail.scss';


const Detail = (props) => {
  return (
    <div className="detailWrapper">
      <div className="name"> {props.name} </div>
      <div className="position"> {props.position} </div>
      <div className="email">
        <div className="emailIcon"><FontAwesomeIcon icon={faEnvelope} /></div>
        <span className="email_address">{props.email}</span>
      </div>
    </div >
  )
};

export default Detail;