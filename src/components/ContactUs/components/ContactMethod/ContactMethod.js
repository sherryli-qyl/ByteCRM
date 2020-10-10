import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faComments } from '@fortawesome/free-solid-svg-icons';
import './ContactMethod.scss';

const ContactMethod = () => (

    // <div className="Contact_method">
    //     <div className="Call_sale">
    //         <image className="Call_background" src={Calltosale} alt="Call to sale" />
    //     </div>
    //     <div className="Customer_service">
    //         <div className="Email_customer">
    //             <image className="Email_background" src={Emailtous} alt="Call to sale" />
    //         </div>
    //     </div>
    // </div>
    <div>
        <div>
            <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
    </div>
);

export default ContactMethod;