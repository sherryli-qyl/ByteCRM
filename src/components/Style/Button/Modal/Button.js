import React from 'react';
import "./ButtonStyle.scss";




const Button = ({
    children,
    size, //large,small
    variant,//contained,outlined
    btnDisable,
    onClick, 
}) => {
    let className = 'containedButton';
    let btnSize = size;

    if (variant === 'contained') {
        className += "--" + btnSize;
    }
    else if (variant === 'outlined') {
        className = "outlinedButton";
        className += "--" + btnSize;
    }

    if(btnDisable){
        className += ' disabled'
    }

    return (
        <button className={className}
            disabled={btnDisable}
            onClick={(event) => {
                event.preventDefault();
                onClick();
             }
            }>{children}</button>
    )
}


export default Button;