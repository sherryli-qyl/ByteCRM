import React from 'react';
import conference from '../../../../img/About/conference.jpg';
import './OurPurpose.scss';

const OurPurpose = () => (
  <div className="our_purpose_wrapper">
    <div className="our_purpose">
      <div className="purpose_text">
        <p> Engage customers,</p>
        <p>manage your distributed organization, </p>
        <p>and save your money. </p>
      </div>
      <div className="purpose_img">
        <img src={conference} alt="conference" />
      </div>
    </div>
    <div className="background_waves">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg_header_bottom"><path fill="#ffffff" fillOpacity="1" d="M0,128L120,160C240,192,480,256,720,266.7C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 165" className="svg_header_left"><path fill="#f5f8fa" fillOpacity="1" d="M189.61,-2.45 C125.84,72.53 217.27,111.02 200.80,150.00 L113.00,152.45 L113.00,-13.31 Z" /></svg>
      <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" className="svg_header_deco">
        <path fill="#F1C21B" d="M20.1,-28.7C28,-26.2,37.8,-24,45.7,-17.7C53.5,-11.3,59.5,-1,60.3,10.3C61.2,21.5,57,33.6,47.8,38C38.7,42.4,24.6,39.2,13.4,39.6C2.3,40.1,-6,44.3,-17.6,46.9C-29.2,49.4,-44.2,50.3,-56.3,44.3C-68.5,38.3,-77.9,25.4,-82.8,10.1C-87.8,-5.2,-88.3,-22.9,-80,-34.5C-71.6,-46.2,-54.2,-51.8,-39.4,-51.2C-24.6,-50.6,-12.3,-43.8,-3.1,-38.9C6.1,-34.1,12.2,-31.3,20.1,-28.7Z" transform="translate(100 100)" />
      </svg>
    </div>
  </div>
);

export default OurPurpose;
