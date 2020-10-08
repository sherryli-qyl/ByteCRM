import React from 'react';
import './ContactUs.scss';
import Call from '../../img/Company/call.svg';
import Email from '../../img/Contact/mail.png';

import CatchBackground from './components/CatchBackground';
import ContactMethod from './components/ContactMethod';

const ContactUs = () => (
    <div className="Contact_container">
        <div className="Contact_layout">
            <CatchBackground />
            <ContactMethod />
        </div>
    </div>
)

export default ContactUs;