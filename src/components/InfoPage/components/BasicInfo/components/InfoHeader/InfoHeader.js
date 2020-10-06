import React from 'react';
import InfoLinkBtn from './Private/InfoLinkBtn';
import './InfoHeader.scss';

const Header = (props) => (
  <div className="infoHeader">
     <InfoLinkBtn type = {props.dataPack.key}>
       {props.dataPack.title}
     </InfoLinkBtn>
  </div>
);

export default Header;
