import React from 'react';
import './ContactUs.scss';

import CatchBackground from './components/CatchBackground';
import ContactMethod from './components/ContactMethod';

const ContactUs = () => {
    return (
        <div className="Contact_container">
            <CatchBackground />
            <ContactMethod />
        </div>
    )
}

export default ContactUs;