import React from 'react';
import './Public.scss';
import SmallLogo from '../../../../img/Logo/smalllogo.png';
import { NavLink } from 'react-router-dom';
import {
  CONTACT_BASE_URL,
  COMPANY_BASE_URL,
  ABOUTUS_BASE_URL,
  CONTACTUS_BASE_URL
} from '../../../Routes/URLMap';
import HeaderNavButton from '../HeaderNavButton';

const Public = () => (
  <div className="Layout">
    <NavLink className = "public-link" activeClassName = "active" to = {CONTACT_BASE_URL}>
    <img src={SmallLogo} alt="small logo" />
    </NavLink>
    <NavLink className = "public-link" activeClassName = "active" to = {CONTACT_BASE_URL}>
      <div className="public_text"> Contacts </div>
    </NavLink>
    <NavLink className = "public-link" activeClassName = "active" to = {COMPANY_BASE_URL}>
      <div className="public_text"> Companies </div>
    </NavLink>
    <NavLink className = "public-link" activeClassName = "active" to = {ABOUTUS_BASE_URL}>
      <div className="public_text"> About </div>
    </NavLink>
    <NavLink className = "public-link" activeClassName = "active" to = {CONTACTUS_BASE_URL}>
      <div className="public_text"> Contact Us </div>
    </NavLink>
  </div>
);

export default Public;
