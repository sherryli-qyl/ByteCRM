import React from 'react';
import './CatchBackground.scss';
import catchBackground from '../../../../img/Contactus/getintouch.jpeg';

const CatchBackground = () => (
    <div className="Catch_background">
    <img className="Catch_us" src={catchBackground} alt="catch us" />
    <div className="Catch_text">
        <h2>Want to get in touch?</h2>
        <p>We are always here and would love to hear from you. Here is the way you can reach us...</p>
    </div>
</div>
);

export default CatchBackground;