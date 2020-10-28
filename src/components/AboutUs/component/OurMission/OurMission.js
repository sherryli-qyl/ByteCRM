import React from 'react';
import people from '../../../../img/About/people.jpg';
import './OurMission.scss';

const OurMission = () => (
  <div className="our_mission_wrapper">
    <div className="mission_text">
      <h2>Our Mission</h2>
      <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul and that they can do it with inbound. That's why we've created a platform uniting software, education, and community to help businesses grow better every day.</p>
    </div>
    <div className="mission_img_wrapper">
      <img src={people} alt="employee" />
    </div>
  </div>
);

export default OurMission;