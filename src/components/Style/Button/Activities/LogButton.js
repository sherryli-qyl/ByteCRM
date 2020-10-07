import React from 'react';
import "./ActivitiesButton.scss";




const LogButton = ({
    children,
    className,
    onClick
}) => {
    return (
        <button className={`logButton ${className}`}
        onClick={(event) => {
            event.preventDefault();
            onClick();
          }}>{children}
        </button>
    )
}


export default LogButton;
