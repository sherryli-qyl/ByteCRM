import React from 'react';
import Background from './components/Background';
import ContactMethod from './components/ContactMethod';
import './ContactUs.scss';

const ContactUs = () => {
    return (
        <div className="Contact_container">
            <Background />
            <ContactMethod />
        </div>
    )
}

export default ContactUs;