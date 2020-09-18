import React from 'react';
import '../AboutContact/AboutContact.scss';
import ContactDetail from './components/ContactDetail';

const ContactbasicList = [
    { key: "First name", value: "Brian" },
    { key: "Last name", value: "Halligan" },
    { key: "Email", value: "bh@hubspot.com" },
    { key: "Phone number", value: "blank" },
    { key: "Lifecycle stage", value: "lead" },
    { key: "Lead status", value: "blank" },
    { key: "Message", value: "blank" },
    { key: "Company name", value: "blank" },
    { key: "Contact owner", value: "blank" },
]

const AboutContact = () => (
    <div className="about_contact">
        <h3> About this contact</h3>
        {ContactbasicList.map((item) => (
            <ContactDetail
                title={item.key}
                value={item.value}
            />
        ))}
    </div>
);

export default AboutContact;