import React from 'react';
import { faPhoneAlt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Detail.scss';


const Detail = (props) => {
  return (
    <div className="detailWrapper">
      <div className="company"> {props.company} </div>
      <div className="website">
        <a className="website_link">
          {props.website}
        </a>
        <div className="linkIcon">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </div>
      </div>
      <div className="phone">
        <div className="phoneIcon">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        {props.phone}
      </div>
    </div >
  )
};

export default Detail;