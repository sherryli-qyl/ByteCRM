import React from 'react';
import "./ActivitiesButton.scss";




const CreateButton = ({
    children,
    className,
    onClick,
    onSave,
}) => {

    return (
        <button className={`createButton ${className}`}
            onClick={(event) => {
                event.preventDefault();
                if (onSave) {
                    onSave();
                }
                onClick();
            }}>{children}</button>
    )
}


export default CreateButton;
