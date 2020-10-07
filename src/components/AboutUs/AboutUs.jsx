import React from 'react';
import './AboutUs.scss';
import OurPurpose from './components/OurPurpose';
import OurMission from './components/OurMission';

const AboutUs = () => (
    <div className="About_container">
        <div className="About_layout">
            <OurPurpose />
            <OurMission />
        </div>
    </div>
);

export default AboutUs;