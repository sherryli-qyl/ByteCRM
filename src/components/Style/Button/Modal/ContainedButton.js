import React from 'react';
import "./ButtonStyle.scss";




const ContainedButton = ({
    children,
    className
}) => {
    return (
        <button className={"containedButton--small"}>{children}</button>
    )

}


export default ContainedButton;
