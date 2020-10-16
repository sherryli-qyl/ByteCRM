import React from 'react';
import conference from '../../img/About/conference.jpg';
import people from '../../img/About/people.jpg';
import "./AboutUs.scss"

const AboutUs = () => {
  return (
    <div className="about_us_layout">
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg_header_bottom"><path fill="#ffffff" fill-opacity="1" d="M0,128L120,160C240,192,480,256,720,266.7C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div className="svg_header_left">
          <svg xmlns="http://www.w3.org/2000/svg"><path fill="#111111" fill-opacity="1" d="M180.00,0.00 C138.26,108.05 212.18,130.75 200.80,150.00 L133.17,133.17 L133.17,0.00 Z"></path></svg>
        </div>
        {/* <div className="svg_header_deco">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F1C21B" d="M36.4,-55.2C49,-48.5,62.3,-41.5,59.4,-31.8C56.6,-22.1,37.6,-9.7,36.4,5.9C35.2,21.5,51.8,40.4,52.9,54.3C54,68.1,39.6,76.9,26.1,74.1C12.6,71.3,0.1,56.8,-12.1,49.4C-24.2,42,-36,41.7,-43.2,36C-50.5,30.3,-53.3,19.2,-50.5,9.9C-47.6,0.7,-39.2,-6.7,-33,-13C-26.8,-19.2,-23,-24.5,-17.8,-34.5C-12.7,-44.6,-6.4,-59.5,2.8,-63.8C11.9,-68.1,23.8,-61.8,36.4,-55.2Z" transform="translate(100 100)" />
          </svg>
        </div> */}
      </div>
      <div className="our_mission_wrapper">
        <div className="mission_text">
          <h2>Our Mission</h2>
          <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created a platform uniting software, education, and community to help businesses grow better every day.</p>
        </div>
        <div className="mission_img_wrapper">
          <img src={people} alt="employee" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs;