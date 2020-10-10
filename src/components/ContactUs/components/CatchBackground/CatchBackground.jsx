import React from "react";
import catchImg from "../../../../img/Contactus/getintouch.jpeg";
import office from "../../../../img/Contactus/office.jpg";
import office1 from "../../../../img/Contactus/office1.jpg";
import "./CatchBackground.scss";

const CatchBackground = () => {
  return (
    <div className="Catch_background">
      <div className="catch_img">
        {/* <img src={catchImg} alt="catch" /> */}
      </div>
      <div className="Catch_text">
        <h2>Want to get in touch?</h2>
        <p>
          We are always here and would love to hear from you. Here is the way you
          can reach us...
      </p>
      </div>
    </div>
  )
}

export default CatchBackground;
