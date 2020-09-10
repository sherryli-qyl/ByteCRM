import React from 'react';
import "./ContactHeader.scss";
import IconProfile from "../../../../img/Contact/profile.png";
import IconContact from "../../../../img/Contact/contact.png"
import { NavLink } from 'react-router-dom';


const ContactHeader = () => (
  <div className="contact_basic">
    <button className="back-to-list">
    <NavLink activeClassName="active" to="/contacts">
      <div className="contact_text"> Contacts </div>
      <img className="icon_contact" src={IconContact} alt="Contact" />
      </NavLink>
    </button>
    <div className="contact_header">
      <img className="profile_icon" src={IconProfile} alt="Profile" />
      <div className="contact_name"> Brian Halligan </div>
      <div className="contact_position"> CEO at HubSpot, Inc. </div>
    </div>
  </div>
);


export default ContactHeader;