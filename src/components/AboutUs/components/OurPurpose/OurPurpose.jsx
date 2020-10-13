import React from 'react';
import './OurPurpose.scss';
import ourPurpose from '../../../../img/About/ourpurpose.jpeg';

const OurPurpose = () => (
    <div className="Our_purpose">
        <p className="purpose_text"> Engage customers, manage your distributed organization, and save your money. </p>
        <img className="purpose_img" src={ourPurpose} alt="purpose" />
    </div>
);

export default OurPurpose;
