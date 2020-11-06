import React from 'react';
import './AddItem.scss';



const AddItem = ({
    label,
    children,
}) => {
    return (
        <div className="addItem">
            <div className="addItem__label">
                {label}
            </div>
            <div className="addItem__inputWrapper">
                {children}
            </div>
        </div>
    )
}

export default AddItem;