import React from 'react';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = (props) => {
  return (
    <div className="ExpandRelationship">
      <FontAwesomeIcon className="ChevronDown"icon={faChevronDown} />
      {props.children}
      <div className="NumOfRelation">(2)</div>
    </div>
  )
}


export default Header;
