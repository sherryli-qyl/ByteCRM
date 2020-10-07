import React from 'react';
import './ContactMethod.scss';
import Calltosale from '../../../../img/Contactus/calltosale.jpeg';
import Emailtous from '../../../../img/Contactus/emailtous.jpeg';

const ContactMethod = () => (
    <div className="Contact_method">
        <div className="Call_sale">
            <image className="Call_background" src={Calltosale} alt="Call to sale" />
        </div>
        <div className="Customer_service">
            <div className="Email_customer">
                <image className="Email_background" src={Emailtous} alt="Call to sale" />
            </div>
        </div>
    </div>
);

export default ContactMethod;