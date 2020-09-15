import React from 'react';
import "./ActivitiesButton.scss";




const LogButton = ({
    children,
    className
}) => {
    return (
        <button className={"logButton "}>{children}</button>
    )
}


export default LogButton;
