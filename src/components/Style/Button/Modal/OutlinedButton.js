import React from 'react';
import "./ButtonStyle.scss";





const OutLinedButton = ({
    children,
    className
}) => {
    return (
        <button className={`outlinedButton ${className}`}>{children}</button>
    )

}


export default OutLinedButton;

