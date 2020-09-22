import React from 'react';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import "./CompanyDetail.scss";
// import { info } from 'node-sass';

const CompanyDetail = (props) => (
  <div>
    <div className="labelwithinfo">
      <div className="label"> {props.label} </div>
      <div className="info" data-tip data-for="infoTip">
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
      <ReactTooltip id="infoTip" place="top" effect="solid">
        Property was filled from the ByteCRM database.
      </ReactTooltip>
    </div>
    <div className="input"> {props.input} </div>
  </div >
);

export default CompanyDetail;