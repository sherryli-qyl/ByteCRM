import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faComments } from '@fortawesome/free-solid-svg-icons';
import MethodCard from './component/MethodCard';
import './ContactMethod.scss';

const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} size="3x" />;
const emailIcon = <FontAwesomeIcon icon={faComments} size="3x" />;

const ContactMethod = () => (
  <div className="contact_method_container">
    <div className="callMethod">
      <MethodCard
        icon={phoneIcon}
        type="Talk to Sales"
        description="Interested in ByteCRM’s software? Just pick up the phone to chat with a member of our sales team."
        detail="+61 2 8046 6514"
      />
    </div>
    <div className="emailMethod">
      <MethodCard
        icon={emailIcon}
        type="Contact Customer Support"
        description="Sometimes you need a little help from your friends. Or a ByteCRM support rep. Don’t worry… we’re here for you."
        detail="a001@bytecrm.com"
      />
    </div>
  </div>
);

export default ContactMethod;
