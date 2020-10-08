import React from 'react';
import { faPhoneAlt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Detail.scss';


const Detail = (props) => {
  const websiteURL = `https://${props.website}`;
  return (
    <div className="detailWrapper">
      <div className="company"> {props.company} </div>
      <div className="website">
        <a className="website_link" href={websiteURL} target="_blank" rel="noopener noreferrer">
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
