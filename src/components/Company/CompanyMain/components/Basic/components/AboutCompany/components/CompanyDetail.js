import React from 'react';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./CompanyDetail.scss";
// import { info } from 'node-sass';

const CompanyDetail = (props) => (
  <div>
    <div className ="labelwithinfo">
    <div className="label"> {props.label} </div>
    <div className="info">
    <FontAwesomeIcon icon={faInfoCircle} />
    </div>
    </div>
    <div className="input"> {props.input} </div>
  </div>
);

export default CompanyDetail;