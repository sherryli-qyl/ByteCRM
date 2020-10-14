import React from 'react';
import { faPhoneAlt, faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RemoveButtom from '../../../../../../../Style/Button/Activities/LogButton';
import HintBox from '../../../../../../../HintBox';
import './Detail.scss';


const Detail = (props) => {
  const websiteURL = `https://${props.website}`;
  return (
    <div className="relatedCompany">
      <div className="relatedCompany__companyName"> {props.name} </div>
      <div className="relatedCompany__website">
        <a className="relatedCompany__website__link" href={websiteURL} target="_blank" rel="noopener noreferrer">
          {props.website}
        </a>
        <div className="relatedCompany__website__linkIcon">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </div>
      </div>
      <div className="relatedCompany__phone">
        <div className="relatedCompany__phone__icon">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        {props.phoneNumber}
      </div>
      <div className='relatedCompany__btnContainer'>
        <RemoveButtom className='relatedCompany__btnContainer__remove'>
          <div className="relatedCompany__btnContainer__remove__hint">
            <HintBox variant='bottomRight'>
              Remove association
          </HintBox>
          </div>
          <FontAwesomeIcon icon={faTimes} />
        </RemoveButtom>
      </div>
    </div >
  )
};

export default Detail;
