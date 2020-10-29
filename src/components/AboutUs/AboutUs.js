import React from 'react';
import OurMission from './component/OurMission';
import OurPurpose from './component/OurPurpose';
import "./AboutUs.scss"

const AboutUs = () => {
  return (
    <div className="about_us_layout">
      <OurPurpose />
      <OurMission />
    </div>
  )
}

export default AboutUs;