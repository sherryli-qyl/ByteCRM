import React from 'react';
import '../AboutContact/AboutContact.scss';
import ContactDetail from './components/ContactDetail';

const ContactbasicList = [
    { title: "First name", value: "Brian" },
    { title: "Last name", value: "Halligan" },
    { title: "Email", value: "bh@hubspot.com" },
    { title: "Phone number", value: "blank" },
    { title: "Lifecycle stage", value: "lead" },
    { title: "Lead status", value: "blank" },
    { title: "Message", value: "blank" },
    { title: "Company name", value: "blank" },
    { title: "Contact owner", value: "blank" },
]

const AboutContact = () => (
    <div className="about_contact">
        <h3> About this contact</h3>
        {ContactbasicList.map((item) => (
            <ContactDetail
                title={item.title}
                value={item.value}
            />
        ))}
    </div>
);

export default AboutContact;