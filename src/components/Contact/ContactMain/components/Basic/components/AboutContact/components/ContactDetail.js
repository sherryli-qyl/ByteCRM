import React from 'react';

const ContactDetail = (props) => (
    <div className="firstname_box">
        <div className="title_name"> {props.title} </div>
        <div className="value_name"> {props.value} </div>
    </div>
);

export default ContactDetail;