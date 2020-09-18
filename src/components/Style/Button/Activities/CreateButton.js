import React from 'react';
import "./ActivitiesButton.scss";




const CreateButton = ({
    children,
    className,
    onClick,
}) => {
    return (
        <button className={"createButton "}
        onClick={(event) => {
            event.preventDefault();
            onClick();
          }}>{children}</button>
    )
}


export default CreateButton;
