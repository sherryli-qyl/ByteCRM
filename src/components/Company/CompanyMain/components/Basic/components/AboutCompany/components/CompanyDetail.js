import React from 'react';
import "./CompanyDetail.scss"

const CompanyDetail = (props) => (
  <div>
    <div className="label"> {props.label} </div>
    <div className="input"> {props.input} </div>
  </div>
);

export default CompanyDetail;