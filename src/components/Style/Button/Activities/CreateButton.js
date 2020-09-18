import React from 'react';
import "./ActivitiesButton.scss";




const CreateButton = ({
    children,
    className
}) => {
    return (
        <button className={"createButton "}>{children}</button>
    )
}


export default CreateButton;
