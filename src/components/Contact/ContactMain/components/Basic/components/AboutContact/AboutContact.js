import React from 'react';
import '../AboutContact/AboutContact.scss';

const AboutContact = () => (
    <div className="about_contact">
    <h3> About this contact</h3>
    <div className="firstname_box">
        <div className="key_name"> First name </div>
        <div className="value_name"> Brian </div>
    </div>
    <div className="lastname_box">
        <div className="key_name"> Last name </div>
        <div className="value_name"> Halligan </div>
    </div>
    <div className="email_box">
        <div className="key_name"> Email </div>
        <div className="value_name"> bh@hubspot.com </div>
    </div>
    <div className="phone-number_box">
        <div className="key_name"> Phone number </div>
        <div className="value_name">  blank </div>
    </div>
    <div className="contact-number_box">
        <div className="key_name"> Contact owner </div>
        <div className="value_name">  blank </div>
    </div>
    <div className="lifecycles-tage_box">
        <div className="key_name"> Lifecycle stage </div>
        <div className="value_name">  Lead </div>
    </div>
    <div className="lead-status_box">
        <div className="key_name"> Lead status </div>
        <div className="value_name">  blank </div>
    </div>
    <div className="message_box">
        <div className="key_name"> Message </div>
        <div className="value_name">  blank </div>
    </div>
    <div className="company-name_box">
        <div className="key_name"> Company name </div>
        <div className="value_name">  blank </div>
    </div>
    <button className="view-all-properties">View all properties </button>
    <button className="view-property-history">View property history </button>
</div>
);

export default AboutContact;