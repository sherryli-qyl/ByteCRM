import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CardMaker.scss';

const CreatedBy = (props) => (
  <div className="createdby-container">
    <div className="createdby-user-icon">
      <FontAwesomeIcon icon={faUserCircle} />
    </div>
    <span className="createdby-info"> {props.author} logged a call</span>
  </div>
);

export default CreatedBy;
