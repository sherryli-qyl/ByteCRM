import React from 'react';
import "./ButtonStyle.scss";




const ContainedButton = ({
    children,
    className
}) => {
    return (
        <button className={"containedButton "}>{children}</button>
    )

}


export default ContainedButton;
