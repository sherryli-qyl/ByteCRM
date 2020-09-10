import React from 'react';
import "./ContactHeader.scss";
import IconProfile from "../../../../../../img/Contact/profile.png";
import IconContact from "../../../../../../img/Contact/contact.png"

const ContactHeader = () => (
  <div className="contact_basic">
    <button className="back-to-list">
      <div className="contact_text"> Contacts </div>
      <img className="icon_contact" src={IconContact} alt="Contact" />
    </button>
    <div className="contact_header">
      <img className="profile_icon" src={IconProfile} alt="Profile" />
      <div className="contact_name"> Brian Halligan </div>
      <div className="contact_position"> CEO at HubSpot, Inc. </div>
    </div>
  </div>
);


export default ContactHeader;