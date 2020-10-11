import React from 'react';
import './ContactUs.scss';

// import CatchBackground from './components/CatchBackground';
import Background from './components/Background';
import ContactMethod from './components/ContactMethod';

const ContactUs = () => {
    return (
        <div className="Contact_container">
            <Background />
            <ContactMethod />
        </div>
    )
}

export default ContactUs;