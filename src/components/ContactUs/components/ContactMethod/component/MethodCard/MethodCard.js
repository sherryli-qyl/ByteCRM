import React from 'react';
import './MethodCard.scss';

const MethodCard = (props) => (
  <div className="cardWrapper">
    <div className="icon">{props.icon}</div>
    <h3 className="type">{props.type}</h3>
    <p className="description">{props.description}</p>
    <span className="detail">{props.detail}</span>
  </div>
);

export default MethodCard;
